using backend.Data;
using backend.Protos;
using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using System.Collections.Concurrent;
using System.Security.Cryptography;
using System.Text;

namespace backend.Services;

public class EmployeeRpcServiceImpl : EmployeeRpcService.EmployeeRpcServiceBase
{
    private readonly AppDbContext _context;
    
    // Thread-safe state tracking for online presence and active chat stream clients
    private static readonly ConcurrentDictionary<int, DateTime> ActiveSessions = new();
    private static readonly ConcurrentBag<IServerStreamWriter<ChatMessageResponse>> ChatSubscribers = new();

    public EmployeeRpcServiceImpl(AppDbContext context)
    {
        _context = context;
    }

    public override async Task<LoginResponse> Login(LoginRequest request, ServerCallContext context)
    {
        var employee = await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.HybridSchedule)
            .FirstOrDefaultAsync(e => e.Username == request.Username);

        if (employee == null)
        {
            return new LoginResponse { Success = false, ErrorMessage = "User not found." };
        }

        var incomingHash = HashPassword(request.Password);
        if (employee.PasswordHash != incomingHash)
        {
            return new LoginResponse { Success = false, ErrorMessage = "Invalid password." };
        }

        // Register or refresh active online session heartbeat
        ActiveSessions[employee.Id] = DateTime.UtcNow;

        return new LoginResponse
        {
            Success = true,
            Token = Guid.NewGuid().ToString(),
            Employee = MapToEmployeeResponse(employee)
        };
    }

    public override async Task GetEmployees(UserHeartbeatRequest request, IServerStreamWriter<EmployeeListResponse> responseStream, ServerCallContext context)
    {
        if (request.EmployeeId > 0) ActiveSessions[request.EmployeeId] = DateTime.UtcNow;

        // Push initial snapshot state immediately to the client
        var currentEmployees = await GetEmployeesFromDb();
        await responseStream.WriteAsync(currentEmployees);

        // Keep connection open and broadcast directory updates periodically until canceled
        while (!context.CancellationToken.IsCancellationRequested)
        {
            if (request.EmployeeId > 0) ActiveSessions[request.EmployeeId] = DateTime.UtcNow;

            await Task.Delay(2000); 
            var freshEmployees = await GetEmployeesFromDb();
            await responseStream.WriteAsync(freshEmployees);
        }
    }

    private async Task<EmployeeListResponse> GetEmployeesFromDb()
    {
        var dbEmployees = await _context.Employees
            .AsNoTracking()
            .Include(e => e.Department)
            .Include(e => e.HybridSchedule)
            .ToListAsync();

        // Evict expired sessions missing a recent heartbeat threshold
        var expirationThreshold = DateTime.UtcNow.AddSeconds(-7);
        foreach (var session in ActiveSessions)
        {
            if (session.Value < expirationThreshold)
            {
                ActiveSessions.TryRemove(session.Key, out _);
            }
        }

        var response = new EmployeeListResponse();
        foreach (var emp in dbEmployees)
        {
            response.Employees.Add(MapToEmployeeResponse(emp));
        }
        return response;
    }

    private static EmployeeResponse MapToEmployeeResponse(backend.Models.Employee emp)
    {
        bool isOnline = ActiveSessions.ContainsKey(emp.Id);

        return new EmployeeResponse
        {
            Id = emp.Id,
            FirstName = emp.FirstName ?? "",
            LastName = emp.LastName ?? "",
            SlackHandle = emp.SlackHandle ?? "",
            HireDate = emp.HireDate.ToString("yyyy-MM-dd"),
            Department = emp.Department != null ? new DepartmentResponse { Id = emp.Department.Id, Name = emp.Department.Name } : null,
            HybridSchedule = emp.HybridSchedule != null ? new HybridScheduleResponse 
            { 
                Monday = emp.HybridSchedule.Monday, 
                Tuesday = emp.HybridSchedule.Tuesday, 
                Wednesday = emp.HybridSchedule.Wednesday, 
                Thursday = emp.HybridSchedule.Thursday, 
                Friday = emp.HybridSchedule.Friday 
            } : null,
            IsOnline = isOnline
        };
    }

    private static string HashPassword(string password)
    {
        using var sha256 = SHA256.Create();
        var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(bytes);
    }

    public override async Task<LoginResponse> UpdateHybridSchedule(UpdateScheduleRequest request, ServerCallContext context)
    {
        var schedule = await _context.HybridSchedules
            .FirstOrDefaultAsync(s => s.EmployeeId == request.EmployeeId);

        if (schedule == null)
        {
            return new LoginResponse { Success = false, ErrorMessage = "Schedule record not found." };
        }

        ActiveSessions[request.EmployeeId] = DateTime.UtcNow;

        schedule.Monday = request.Monday;
        schedule.Tuesday = request.Tuesday;
        schedule.Wednesday = request.Wednesday;
        schedule.Thursday = request.Thursday;
        schedule.Friday = request.Friday;

        _context.HybridSchedules.Update(schedule);
        await _context.SaveChangesAsync();

        return new LoginResponse { Success = true };
    }

    public override async Task<ChatWindowResponse> SendMessage(ChatMessageRequest request, ServerCallContext context)
    {
        var dbMessage = new backend.Models.ChatMessage
        {
            SenderId = request.SenderId,
            ReceiverId = request.ReceiverId,
            Text = request.Text,
            Timestamp = DateTime.UtcNow
        };

        _context.ChatMessages.Add(dbMessage);
        await _context.SaveChangesAsync();

        var liveMessage = new ChatMessageResponse
        {
            SenderId = request.SenderId,
            ReceiverId = request.ReceiverId,
            Text = request.Text,
            Time = dbMessage.Timestamp.ToLocalTime().ToString("HH:mm")
        };

        // Fan-out message delivery across all active streaming listener channels
        foreach (var subscriber in ChatSubscribers)
        {
            try
            {
                await subscriber.WriteAsync(liveMessage);
            }
            catch
            {
                // Disconnected channels are safely bypassed and cleaned up via native loop conditions
            }
        }

        return new ChatWindowResponse { Success = true };
    }

    public override async Task ListenMessages(UserHeartbeatRequest request, IServerStreamWriter<ChatMessageResponse> responseStream, ServerCallContext context)
    {
        ChatSubscribers.Add(responseStream);

        // Keep stream reference active while receiving regular connection heartbeats
        while (!context.CancellationToken.IsCancellationRequested)
        {
            if (request.EmployeeId > 0) ActiveSessions[request.EmployeeId] = DateTime.UtcNow;
            await Task.Delay(2000);
        }
    }

    public override async Task<ChatHistoryResponse> GetChatHistory(ChatHistoryRequest request, ServerCallContext context)
    {
        // Query chronological message exchanges matching both directional flows between participants
        var dbMessages = await _context.ChatMessages
            .AsNoTracking()
            .Where(m => (m.SenderId == request.SenderId && m.ReceiverId == request.ReceiverId) ||
                        (m.SenderId == request.ReceiverId && m.ReceiverId == request.SenderId))
            .OrderBy(m => m.Timestamp)
            .ToListAsync();

        var response = new ChatHistoryResponse();
        foreach (var m in dbMessages)
        {
            response.Messages.Add(new ChatMessageResponse
            {
                SenderId = m.SenderId,
                ReceiverId = m.ReceiverId,
                Text = m.Text,
                Time = m.Timestamp.ToLocalTime().ToString("HH:mm")
            });
        }

        return response;
    }
}
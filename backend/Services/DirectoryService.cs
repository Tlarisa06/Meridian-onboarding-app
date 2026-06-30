using backend.Data;
using backend.Models;
using backend.Protos;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Concurrent;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Channels;

namespace backend.Services;

// COURSE TOPIC: Event payload structure for decoupled messaging
public class HybridScheduleEvent
{
    public int EmployeeId { get; set; }
    public bool Monday { get; set; }
    public bool Tuesday { get; set; }
    public bool Wednesday { get; set; }
    public bool Thursday { get; set; }
    public bool Friday { get; set; }
}

// COURSE TOPIC: In-Memory Message Broker managing asynchronous event queues safely
public class ScheduleMessageBroker
{
    private readonly Channel<HybridScheduleEvent> _channel;

    public ScheduleMessageBroker()
    {
        // Unbounded channel acts as an async FIFO Message Queue
        _channel = Channel.CreateUnbounded<HybridScheduleEvent>(new UnboundedChannelOptions
        {
            SingleReader = true, // Enforces dedicated background worker sequence
            SingleWriter = false
        });
    }

    public ChannelWriter<HybridScheduleEvent> Writer => _channel.Writer;
    public ChannelReader<HybridScheduleEvent> Reader => _channel.Reader;
}

public class DirectoryService
{
    private readonly AppDbContext _context;
    public static readonly ConcurrentDictionary<int, DateTime> ActiveSessions = new();

    public DirectoryService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<Employee?> AuthenticateAsync(string username)
    {
        return await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.HybridSchedule)
            .FirstOrDefaultAsync(e => e.Username == username);
    }

    // 3. Generate Digital Token Vector (Course Topic: Compact & Independent Claims)
    public string GenerateJwtToken(Employee emp)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var jwtKey = "meridian_secret_security_key_with_proper_length_2026";
        var keyBytes = Encoding.UTF8.GetBytes(jwtKey);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[] 
            {
                new Claim(JwtRegisteredClaimNames.Sub, emp.Id.ToString()),
                new Claim("dept", emp.Department?.Name ?? "General")
            }),
            Expires = DateTime.UtcNow.AddHours(2), // Set Token Expiration Window
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(keyBytes), SecurityAlgorithms.HmacSha256Signature)
        };

        var tokenObject = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(tokenObject);
    }

    public void RegisterHeartbeat(int employeeId)
    {
        if (employeeId > 0) ActiveSessions[employeeId] = DateTime.UtcNow;
    }

    public async Task<EmployeeListResponse> GetEmployeeListResponseAsync()
    {
        var dbEmployees = await _context.Employees
            .AsNoTracking()
            .Include(e => e.Department)
            .Include(e => e.HybridSchedule)
            .ToListAsync();

        var expirationThreshold = DateTime.UtcNow.AddSeconds(-7);
        foreach (var session in ActiveSessions)
        {
            if (session.Value < expirationThreshold) ActiveSessions.TryRemove(session.Key, out _);
        }

        var response = new EmployeeListResponse();
        foreach (var emp in dbEmployees)
        {
            response.Employees.Add(MapToEmployeeResponse(emp));
        }
        return response;
    }

    public async Task<bool> UpdateHybridScheduleAsync(int employeeId, bool mon, bool tue, bool wed, bool thu, bool fri)
    {
        var schedule = await _context.HybridSchedules.FirstOrDefaultAsync(s => s.EmployeeId == employeeId);
        if (schedule == null) return false;

        schedule.Monday = mon; schedule.Tuesday = tue; schedule.Wednesday = wed; schedule.Thursday = thu; schedule.Friday = fri;
        _context.HybridSchedules.Update(schedule);
        await _context.SaveChangesAsync();
        return true;
    }

    public static EmployeeResponse MapToEmployeeResponse(Employee emp)
    {
        return new EmployeeResponse
        {
            Id = emp.Id,
            FirstName = emp.FirstName ?? "",
            LastName = emp.LastName ?? "",
            SlackHandle = emp.SlackHandle ?? "",
            HireDate = emp.HireDate.ToString("yyyy-MM-dd"),
            IsOnline = ActiveSessions.ContainsKey(emp.Id),
            Department = emp.Department != null ? new DepartmentResponse { Id = emp.Department.Id, Name = emp.Department.Name } : null,
            HybridSchedule = emp.HybridSchedule != null ? new HybridScheduleResponse 
            { 
                Monday = emp.HybridSchedule.Monday, Tuesday = emp.HybridSchedule.Tuesday, 
                Wednesday = emp.HybridSchedule.Wednesday, Thursday = emp.HybridSchedule.Thursday, Friday = emp.HybridSchedule.Friday 
            } : null
        };
    }
}
using backend.Data;
using backend.Protos;
using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace backend.Services;

public class EmployeeRpcServiceImpl : EmployeeRpcService.EmployeeRpcServiceBase
{
    private readonly AppDbContext _context;

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
            return new LoginResponse
            {
                Success = false,
                ErrorMessage = "User not found."
            };
        }

        var incomingHash = HashPassword(request.Password);
        if (employee.PasswordHash != incomingHash)
        {
            return new LoginResponse
            {
                Success = false,
                ErrorMessage = "Invalid password."
            };
        }

        return new LoginResponse
        {
            Success = true,
            Token = Guid.NewGuid().ToString(),
            Employee = MapToEmployeeResponse(employee)
        };
    }

    public override async Task GetEmployees(EmptyRequest request, IServerStreamWriter<EmployeeListResponse> responseStream, ServerCallContext context)
    {
        var currentEmployees = await GetEmployeesFromDb();
        await responseStream.WriteAsync(currentEmployees);

        while (!context.CancellationToken.IsCancellationRequested)
        {
            await Task.Delay(2000); 
            var freshEmployees = await GetEmployeesFromDb();
            await responseStream.WriteAsync(freshEmployees);
        }
    }

    private async Task<EmployeeListResponse> GetEmployeesFromDb()
    {
        // Disable EF Core local caching to fetch fresh database states
        var dbEmployees = await _context.Employees
            .AsNoTracking()
            .Include(e => e.Department)
            .Include(e => e.HybridSchedule)
            .ToListAsync();

        var response = new EmployeeListResponse();
        foreach (var emp in dbEmployees)
        {
            response.Employees.Add(MapToEmployeeResponse(emp));
        }
        return response;
    }

    private static EmployeeResponse MapToEmployeeResponse(backend.Models.Employee emp)
    {
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
            } : null
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
            return new LoginResponse
            {
                Success = false,
                ErrorMessage = "Schedule record not found."
            };
        }

        // Direct 1:1 state updates
        schedule.Monday = request.Monday;
        schedule.Tuesday = request.Tuesday;
        schedule.Wednesday = request.Wednesday;
        schedule.Thursday = request.Thursday;
        schedule.Friday = request.Friday;

        _context.HybridSchedules.Update(schedule);
        await _context.SaveChangesAsync();

        return new LoginResponse
        {
            Success = true
        };
    }
}
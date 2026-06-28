using backend.Data;
using backend.Models;
using backend.Protos;
using Microsoft.EntityFrameworkCore;
using System.Collections.Concurrent;

namespace backend.Services;

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
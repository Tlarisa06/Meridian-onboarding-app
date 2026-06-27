using backend.Data;
using backend.Protos;
using Grpc.Core;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class EmployeeRpcServiceImpl : EmployeeRpcService.EmployeeRpcServiceBase
{
    private readonly AppDbContext _context;

    public EmployeeRpcServiceImpl(AppDbContext context)
    {
        _context = context;
    }

    public override async Task GetEmployees(EmptyRequest request, IServerStreamWriter<EmployeeListResponse> responseStream, ServerCallContext context)
    {
        var initialEmployees = await GetEmployeesFromDb();
        await responseStream.WriteAsync(initialEmployees);

        while (!context.CancellationToken.IsCancellationRequested)
        {
            await Task.Delay(5000); 
        }
    }

    private async Task<EmployeeListResponse> GetEmployeesFromDb()
    {
        var dbEmployees = await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.HybridSchedule)
            .ToListAsync();

        var response = new EmployeeListResponse();
        foreach (var emp in dbEmployees)
        {
            response.Employees.Add(new EmployeeResponse
            {
                Id = emp.Id,
                FirstName = emp.FirstName ?? "",
                LastName = emp.LastName ?? "",
                SlackHandle = emp.SlackHandle ?? "",
                HireDate = emp.HireDate.ToString("yyyy-MM-dd"),
                Department = emp.Department != null ? new DepartmentResponse { Id = emp.Department.Id, Name = emp.Department.Name } : null,
                HybridSchedule = emp.HybridSchedule != null ? new HybridScheduleResponse 
                { 
                    Monday = emp.HybridSchedule.Monday, Tuesday = emp.HybridSchedule.Tuesday, 
                    Wednesday = emp.HybridSchedule.Wednesday, Thursday = emp.HybridSchedule.Thursday, Friday = emp.HybridSchedule.Friday 
                } : null
            });
        }
        return response;
    }
}
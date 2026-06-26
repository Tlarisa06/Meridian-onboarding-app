using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeesController : ControllerBase
{
    private readonly AppDbContext _context;

    public EmployeesController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/employees
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
    {
        // Fetch all employees and include both Department AND HybridSchedule
        var employees = await _context.Employees
            .Include(e => e.Department)
            .Include(e => e.HybridSchedule)
            .ToListAsync();

        return Ok(employees);
    }
}
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Department> Departments { get; set; }
    public DbSet<Employee> Employees { get; set; }
    public DbSet<HybridSchedule> HybridSchedules { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Seed default corporate departments
        modelBuilder.Entity<Department>().HasData(
            new Department { Id = 1, Name = "Engineering" },
            new Department { Id = 2, Name = "Sales" },
            new Department { Id = 3, Name = "Marketing" },
            new Department { Id = 4, Name = "HR" },
            new Department { Id = 5, Name = "Finance" }
        );

        // Ensure global uniqueness for credentials
        modelBuilder.Entity<Employee>()
            .HasIndex(e => e.Username)
            .IsUnique();
    }
}
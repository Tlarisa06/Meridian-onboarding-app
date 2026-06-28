using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    // DbSets representing core application tables
    public DbSet<Department> Departments { get; set; }
    public DbSet<Employee> Employees { get; set; }
    public DbSet<ChatMessage> ChatMessages { get; set; }
    public DbSet<HybridSchedule> HybridSchedules { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Seed lookup data for organizational departments
        modelBuilder.Entity<Department>().HasData(
            new Department { Id = 1, Name = "Engineering" },
            new Department { Id = 2, Name = "Sales" },
            new Department { Id = 3, Name = "Marketing" },
            new Department { Id = 4, Name = "HR" },
            new Department { Id = 5, Name = "Finance" }
        );

        // Enforce unique database index constraints on user credentials
        modelBuilder.Entity<Employee>()
            .HasIndex(e => e.Username)
            .IsUnique();
    }
}
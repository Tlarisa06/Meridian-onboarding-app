using backend.Models;
using System.Security.Cryptography;
using System.Text;

namespace backend.Data;

public static class DbSeeder
{
    public static void SeedData(AppDbContext context)
    {
        if (context.Employees.Any())
        {
            return;
        }

        var firstNames = new[] { "John", "Jane", "Alex", "Emily", "Michael", "Sarah", "David", "Olivia", "Daniel", "Sophia", "Andrei", "Elena", "Radu", "Anca", "Mihai", "Roxana" };
        var lastNames = new[] { "Smith", "Doe", "Johnson", "Brown", "Taylor", "Miller", "Popescu", "Ionescu", "Nistor", "Lupu", "Muresan", "Stoica" };
        var random = new Random();

        var departmentCounts = new Dictionary<int, int>
        {
            { 1, 50 }, // Engineering (Includes 2 hardcoded accounts + 48 random)
            { 2, 50 }, 
            { 3, 50 }, 
            { 4, 1 },  
            { 5, 49 }  
        };

        var defaultPasswordHash = HashPassword("Password123!");

        foreach (var kvp in departmentCounts)
        {
            int deptId = kvp.Key;
            int count = kvp.Value;

            for (int i = 0; i < count; i++)
            {
                Employee employee;

                // Hardcode specific test accounts at the beginning of Engineering (Id = 1)
                if (deptId == 1 && i == 0)
                {
                    employee = new Employee
                    {
                        FirstName = "Larisa",
                        LastName = "Tiflea",
                        DepartmentId = 1,
                        SlackHandle = "larisa.tiflea",
                        HireDate = DateTime.Today.AddMonths(-6),
                        Username = "larisa.tiflea06",
                        PasswordHash = HashPassword("passwd123")
                    };
                }
                else if (deptId == 1 && i == 1)
                {
                    employee = new Employee
                    {
                        FirstName = "Dani",
                        LastName = "Sadean",
                        DepartmentId = 1,
                        SlackHandle = "dani.sadean",
                        HireDate = DateTime.Today.AddMonths(-4),
                        Username = "dani.sadean02",
                        PasswordHash = HashPassword("passwd456")
                    };
                }
                else
                {
                    // Generate remaining employees randomly to build data volume
                    var firstName = firstNames[random.Next(firstNames.Length)];
                    var lastName = lastNames[random.Next(lastNames.Length)];
                    var hireDate = DateTime.Today.AddDays(-random.Next(1, 365));
                    var username = $"{firstName.ToLower()}.{lastName.ToLower()}{random.Next(10, 99)}";

                    employee = new Employee
                    {
                        FirstName = firstName,
                        LastName = lastName,
                        DepartmentId = deptId,
                        SlackHandle = $"{firstName.ToLower()}.{lastName.ToLower()}",
                        HireDate = hireDate,
                        Username = username,
                        PasswordHash = defaultPasswordHash
                    };
                }

                context.Employees.Add(employee);
                context.SaveChanges(); 

                var daysPool = new List<bool> { true, true, true, false, false };
                var shuffledDays = daysPool.OrderBy(_ => random.Next()).ToList();

                var schedule = new HybridSchedule
                {
                    EmployeeId = employee.Id,
                    Monday = shuffledDays[0],
                    Tuesday = shuffledDays[1],
                    Wednesday = shuffledDays[2],
                    Thursday = shuffledDays[3],
                    Friday = shuffledDays[4]
                };

                context.HybridSchedules.Add(schedule);
            }
        }

        context.SaveChanges();
    }

    private static string HashPassword(string password)
    {
        using var sha256 = SHA256.Create();
        var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(bytes);
    }
}
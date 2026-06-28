using backend.Models;
using System.Security.Cryptography;
using System.Text;

namespace backend.Data;

public static class DbSeeder
{
    public static void SeedData(AppDbContext context)
    {
        // Skip seeding if database is already populated
        if (context.Employees.Any())
        {
            return;
        }

        var firstNames = new[] { "John", "Jane", "Alex", "Emily", "Michael", "Sarah", "David", "Olivia", "Daniel", "Sophia", "Andrei", "Elena", "Radu", "Anca", "Mihai", "Roxana" };
        var lastNames = new[] { "Smith", "Doe", "Johnson", "Brown", "Taylor", "Miller", "Popescu", "Ionescu", "Nistor", "Lupu", "Muresan", "Stoica" };
        var random = new Random();

        // Exact distribution mapping requested to target 201 total entries
        var departmentCounts = new Dictionary<int, int>
        {
            { 1, 50 }, // Engineering
            { 2, 50 }, // Sales
            { 3, 50 }, // Marketing
            { 4, 1 },  // HR
            { 5, 50 }  // Finance
        };

        var defaultPasswordHash = HashPassword("Password123!");

        foreach (var kvp in departmentCounts)
        {
            int deptId = kvp.Key;
            int count = kvp.Value;

            for (int i = 0; i < count; i++)
            {
                Employee employee;

                // Hardcode specific test accounts for Engineering
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
                    // Generate pseudo-random corporate user records
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
                
                // Persist immediately to safely generate the entity Id required for the tracking link
                context.SaveChanges(); 

                // Rule context constraint: enforce exactly 3 office days (true) and 2 remote days (false)
                var daysPool = new List<bool> { true, true, true, false, false };
                
                // Fisher-Yates shuffle algorithm to guarantee schedule entropy per record
                int n = daysPool.Count;
                while (n > 1) {
                    n--;
                    int k = random.Next(n + 1);
                    var value = daysPool[k];
                    daysPool[k] = daysPool[n];
                    daysPool[n] = value;
                }

                var schedule = new HybridSchedule
                {
                    EmployeeId = employee.Id,
                    Monday = daysPool[0],
                    Tuesday = daysPool[1],
                    Wednesday = daysPool[2],
                    Thursday = daysPool[3],
                    Friday = daysPool[4]
                };

                context.HybridSchedules.Add(schedule);
            }
        }

        // ==========================================
        // SEED MEETINGS DATA FOR GOOGLE MEET TAB
        // ==========================================
        if (!context.Meetings.Any())
        {
            context.Meetings.AddRange(
                // 🏢 Left Side: Global / Department Synchronization
                new Meeting
                {
                    Title = "Meridian All-Hands Company Update",
                    DepartmentName = "All",
                    TimeString = "09:00 - 09:45",
                    MeetLink = "https://meet.google.com/qwe-rtyu-iop",
                    AttendeeIds = ""
                },
                new Meeting
                {
                    Title = "Engineering Architecture & Standup Sync",
                    DepartmentName = "Engineering",
                    TimeString = "11:00 - 11:45",
                    MeetLink = "https://meet.google.com/eng-arch-sync",
                    AttendeeIds = ""
                },

                // 👤 Right Side: Personalized Onboarding Calendar (Larisa & Dani)
                new Meeting
                {
                    Title = "Onboarding Welcome & IT Tools Set Up",
                    DepartmentName = "None",
                    TimeString = "10:00 - 10:45",
                    MeetLink = "https://meet.google.com/it-setup-room",
                    AttendeeIds = "1,2" // Explicit targets matching hardcoded test account IDs
                },
                new Meeting
                {
                    Title = "1-on-1 Mentorship & First Code Review",
                    DepartmentName = "None",
                    TimeString = "14:30 - 15:15",
                    MeetLink = "https://meet.google.com/mentor-review-session",
                    AttendeeIds = "1" // Target link directly for Larisa
                }
            );
        }

        // Final save context sweep for dependent tracking collection blocks
        context.SaveChanges();
    }

    private static string HashPassword(string password)
    {
        using var sha256 = SHA256.Create();
        var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(bytes);
    }
}
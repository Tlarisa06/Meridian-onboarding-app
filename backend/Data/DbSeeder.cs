using backend.Models;
using System.Security.Cryptography;
using System.Text;

namespace backend.Data;

public static class DbSeeder
{
    public static void SeedData(AppDbContext context)
    {
        context.Database.EnsureCreated();

        // If the database is empty, seed initial ecosystem data
        if (!context.Employees.Any())
        {
            // Clear legacy structural entities to prevent relational misalignment
            if (context.Departments.Any())
            {
                context.Departments.RemoveRange(context.Departments);
                context.SaveChanges();
            }

            // 1. Seed the 5 official company departments
            var departments = new List<Department>
            {
                new() { Name = "Engineering" },
                new() { Name = "Sales" },
                new() { Name = "Marketing" },
                new() { Name = "HR" },
                new() { Name = "Finance" }
            };
            context.Departments.AddRange(departments);
            context.SaveChanges();

            var activeDepartments = context.Departments.ToList();
            var defaultPasswordHash = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes("password123")));
            var today = DateTime.UtcNow;

            var firstNames = new[] { "John", "Jane", "Alex", "Emily", "Michael", "Sarah", "David", "Jessica", "Robert", "Emma" };
            var lastNames = new[] { "Smith", "Doe", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Wilson", "Taylor" };
            var random = new Random(42);

            var employeesToSeed = new List<Employee>();

            // 2. Seed the single HR manager account
            var hrDept = activeDepartments.First(d => d.Name == "HR");
            var hrManager = new Employee
            {
                FirstName = "Anna",
                LastName = "Managing",
                Username = "anna.hr",
                PasswordHash = defaultPasswordHash,
                SlackHandle = "anna_hr",
                HeroDate = today.AddYears(-3),
                DepartmentId = hrDept.Id
            };
            employeesToSeed.Add(hrManager);

            // Generate 196 historical corporate roster profiles split across operational departments
            var operationalDepts = activeDepartments.Where(d => d.Name != "HR").ToList();

            for (int i = 1; i <= 196; i++)
            {
                var fName = firstNames[random.Next(firstNames.Length)];
                var lName = lastNames[random.Next(lastNames.Length)];
                var username = $"{fName.ToLower()}.{lName.ToLower()}.{i}";
                var dept = operationalDepts[random.Next(operationalDepts.Count)];
                
                var randomDaysAgo = random.Next(365 * 2, 365 * 5); 
                var hireDate = today.AddDays(-randomDaysAgo);

                employeesToSeed.Add(new Employee
                {
                    FirstName = fName,
                    LastName = lName,
                    Username = username,
                    PasswordHash = defaultPasswordHash,
                    SlackHandle = $"{fName.ToLower()}_{i}",
                    HireDate = hireDate,
                    DepartmentId = dept.Id
                });
            }

            var hashLarisa = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes("passwd123")));
            var hashDani = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes("passwd456")));

            // 3. Seed exact active new hires within the strict 30-day corporate window
            var currentMonthNewHires = new List<Employee>
            {
                new() {
                    FirstName = "Larisa",
                    LastName = "Tiflea",
                    Username = "larisa.tiflea06",
                    PasswordHash = hashLarisa,
                    SlackHandle = "larisa_tifle",
                    HireDate = today.AddDays(-3), 
                    DepartmentId = activeDepartments.First(d => d.Name == "Engineering").Id
                },
                new() {
                    FirstName = "Dani",
                    LastName = "Sadean",
                    Username = "dani.sadean02",
                    PasswordHash = hashDani,
                    SlackHandle = "dani_sadean",
                    HireDate = today.AddDays(-10), 
                    DepartmentId = activeDepartments.First(d => d.Name == "Sales").Id 
                },
                new() {
                    FirstName = "Elena",
                    LastName = "Dumitrescu",
                    Username = "elena.dumitrescu",
                    PasswordHash = defaultPasswordHash,
                    SlackHandle = "elena_mkt",
                    HireDate = today.AddDays(-20), 
                    DepartmentId = activeDepartments.First(d => d.Name == "Marketing").Id
                }
            };

            employeesToSeed.AddRange(currentMonthNewHires);
            context.Employees.AddRange(employeesToSeed);
            context.SaveChanges();

            // 4. Seed strict hybrid work schedules maintaining the 3 Office / 2 Remote day ratio
            var seededEmployees = context.Employees.ToList();
            foreach (var emp in seededEmployees)
            {
                var fixedDays = new List<bool> { true, true, true, false, false };
                var shuffledDays = fixedDays.OrderBy(_ => random.Next()).ToList();

                context.HybridSchedules.Add(new HybridSchedule
                {
                    EmployeeId = emp.Id,
                    Monday = shuffledDays[0],
                    Tuesday = shuffledDays[1],
                    Wednesday = shuffledDays[2],
                    Thursday = shuffledDays[3],
                    Friday = shuffledDays[4]
                });
            }
            context.SaveChanges();
        }

        // 5. Seed localized department syncs and personalized onboarding tracks
        if (!context.Meetings.Any())
        {
            var larisaId = context.Employees.FirstOrDefault(e => e.Username == "larisa.tiflea06")?.Id.ToString() ?? "199";
            var daniId = context.Employees.FirstOrDefault(e => e.Username == "dani.sadean02")?.Id.ToString() ?? "200";

            var corporateMeetings = new List<Meeting>
            {
                // Left Column: Department Syncs
                new() {
                    Title = "🚀 Global Corporate Checkpoint",
                    DepartmentName = "All", 
                    TimeString = "Monday at 10:00 AM (UTC)",
                    MeetLink = "https://meet.google.com/abc-defg-hij",
                    AttendeeIds = ""
                },
                new() {
                    Title = "💻 Engineering Weekly Sync",
                    DepartmentName = "Engineering", 
                    TimeString = "Tuesday at 11:30 AM (UTC)",
                    MeetLink = "https://meet.google.com/eng-sync-room",
                    AttendeeIds = ""
                },
                new() {
                    Title = "📊 Sales Pipeline Overview",
                    DepartmentName = "Sales", 
                    TimeString = "Wednesday at 4:00 PM (UTC)",
                    MeetLink = "https://meet.google.com/sls-pipeline-room",
                    AttendeeIds = ""
                },

                // Right Column: Personalized Onboarding tracks
                new() {
                    Title = "🤝 Larisa - Intro 1-on-1 Mentorship",
                    DepartmentName = "None",
                    TimeString = "Thursday at 1:00 PM (UTC)",
                    MeetLink = "https://meet.google.com/larisa-mentor-room",
                    AttendeeIds = larisaId
                },
                new() {
                    Title = "🛠️ Larisa - Architecture & Tooling Setup",
                    DepartmentName = "None",
                    TimeString = "Friday at 11:00 AM (UTC)",
                    MeetLink = "https://meet.google.com/larisa-tech-setup",
                    AttendeeIds = larisaId
                },
                new() {
                    Title = "💼 Dani - Sales Tools & CRM Training",
                    DepartmentName = "None",
                    TimeString = "Thursday at 2:30 PM (UTC)",
                    MeetLink = "https://meet.google.com/dani-crm-training",
                    AttendeeIds = daniId
                },
                new() {
                    Title = "🎯 Dani - First Month Goals Planning",
                    DepartmentName = "None",
                    TimeString = "Friday at 3:30 PM (UTC)",
                    MeetLink = "https://meet.google.com/dani-goals-room",
                    AttendeeIds = daniId
                }
            };

            context.Meetings.AddRange(corporateMeetings);
            context.SaveChanges();
        }
    }
}
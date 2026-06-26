using backend.Models;

namespace backend.Data;

public static class DbSeeder
{
    public static void SeedData(AppDbContext context)
    {
        // Check if employees are already seeded
        if (context.Employees.Any())
        {
            return;
        }

        var firstNames = new[] { "John", "Jane", "Alex", "Emily", "Michael", "Sarah", "David", "Olivia", "Daniel", "Sophia", "Andrei", "Elena", "Radu", "Anca", "Mihai", "Roxana" };
        var lastNames = new[] { "Smith", "Doe", "Johnson", "Brown", "Taylor", "Miller", "Popescu", "Ionescu", "Nistor", "Lupu", "Muresan", "Stoica" };
        var random = new Random();

        // Department IDs mapped from AppDbContext: 1=Engineering, 2=Sales, 3=Marketing, 4=HR, 5=Finance
        var departmentCounts = new Dictionary<int, int>
        {
            { 1, 50 }, // Engineering
            { 2, 50 }, // Sales
            { 3, 50 }, // Marketing
            { 4, 1 },  // HR (Single person)
            { 5, 49 }  // Finance (49 + HR = 50 total for balance)
        };

        foreach (var kvp in departmentCounts)
        {
            int deptId = kvp.Key;
            int count = kvp.Value;

            for (int i = 0; i < count; i++)
            {
                var firstName = firstNames[random.Next(firstNames.Length)];
                var lastName = lastNames[random.Next(lastNames.Length)];
                
                // Create random hire date within the last 12 months
                var hireDate = DateTime.Today.AddDays(-random.Next(1, 365));

                var employee = new Employee
                {
                    FirstName = firstName,
                    LastName = lastName,
                    DepartmentId = deptId,
                    SlackHandle = $"{firstName.ToLower()}.{lastName.ToLower()}",
                    HireDate = hireDate
                };

                context.Employees.Add(employee);
                context.SaveChanges(); // Save to generate Employee ID

                // 1. Create a list representing the 5 working days
                // We want exactly 3 True (In-Office) and 2 False (Remote)
                var daysPool = new List<bool> { true, true, true, false, false };

                // 2. Shuffle the pool randomly using Fisher-Yates or a simple OrderBy
                var shuffledDays = daysPool.OrderBy(_ => random.Next()).ToList();

                // 3. Assign the guaranteed 3-office / 2-remote days to the schedule
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
}
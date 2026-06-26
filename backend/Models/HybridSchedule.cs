namespace backend.Models;

public class HybridSchedule
{
    public int Id { get; set; }
    public int EmployeeId { get; set; }
    
    // true = In-Office, false = Remote
    public bool Monday { get; set; }
    public bool Tuesday { get; set; }
    public bool Wednesday { get; set; }
    public bool Thursday { get; set; }
    public bool Friday { get; set; }

    // Relationship mapping
    public Employee? Employee { get; set; }
}
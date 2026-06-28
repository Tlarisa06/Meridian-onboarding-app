namespace backend.Models;

public class Meeting
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string DepartmentName { get; set; } = string.Empty; // "Engineering", "All", etc.
    public string TimeString { get; set; } = string.Empty; // Ex: "10:00 - 11:00"
    public string MeetLink { get; set; } = "https://meet.google.com/abc-defg-hij";
    
    // List of attendee IDs stored as a simple comma-separated string for SQLite
    public string AttendeeIds { get; set; } = string.Empty; 
}
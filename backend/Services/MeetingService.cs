using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class MeetingService
{
    private readonly AppDbContext _context;

    public MeetingService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Meeting>> FetchAllMeetingsAsync()
    {
        return await _context.Meetings.AsNoTracking().ToListAsync();
    }
}
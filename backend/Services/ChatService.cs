using backend.Data;
using backend.Models;
using backend.Protos;
using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using System.Collections.Concurrent;

namespace backend.Services;

public class ChatService
{
    private readonly AppDbContext _context;
    
    // Concurrent pipeline thread-safety storage for broad listening routes
    public static readonly ConcurrentBag<IServerStreamWriter<ChatMessageResponse>> ChatSubscribers = new();

    public ChatService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<ChatMessage> SaveMessageAsync(int senderId, int receiverId, string text)
    {
        var dbMessage = new ChatMessage
        {
            SenderId = senderId,
            ReceiverId = receiverId,
            Text = text,
            Timestamp = DateTime.UtcNow
        };

        _context.ChatMessages.Add(dbMessage);
        await _context.SaveChangesAsync();
        return dbMessage;
    }

    public async Task BroadcastLiveMessageAsync(ChatMessageResponse liveMessage)
    {
        foreach (var subscriber in ChatSubscribers)
        {
            try
            {
                await subscriber.WriteAsync(liveMessage);
            }
            catch
            {
                // Disconnected channels are handled natively or skipped during stream iteration sweeps
            }
        }
    }

    public async Task<List<ChatMessage>> GetSharedHistoryAsync(int senderId, int receiverId)
    {
        return await _context.ChatMessages
            .AsNoTracking()
            .Where(m => (m.SenderId == senderId && m.ReceiverId == receiverId) ||
                        (m.SenderId == receiverId && m.ReceiverId == senderId))
            .OrderBy(m => m.Timestamp)
            .ToListAsync();
    }
}
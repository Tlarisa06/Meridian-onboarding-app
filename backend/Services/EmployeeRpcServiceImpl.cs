using backend.Protos;
using backend.Services;
using Grpc.Core;
using System.Security.Cryptography;
using System.Text;

namespace backend.Services;

public class EmployeeRpcServiceImpl : EmployeeRpcService.EmployeeRpcServiceBase
{
    private readonly DirectoryService _directoryService;
    private readonly ChatService _chatService;
    private readonly MeetingService _meetingService;

    public EmployeeRpcServiceImpl(DirectoryService directoryService, ChatService chatService, MeetingService meetingService)
    {
        _directoryService = directoryService;
        _chatService = chatService;
        _meetingService = meetingService;
    }

    public override async Task<LoginResponse> Login(LoginRequest request, ServerCallContext context)
    {
        var emp = await _directoryService.AuthenticateAsync(request.Username);
        if (emp == null || emp.PasswordHash != Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(request.Password))))
        {
            return new LoginResponse { Success = false, ErrorMessage = "Invalid credentials." };
        }

        _directoryService.RegisterHeartbeat(emp.Id);
        return new LoginResponse { Success = true, Token = Guid.NewGuid().ToString(), Employee = DirectoryService.MapToEmployeeResponse(emp) };
    }

    public override async Task GetEmployees(UserHeartbeatRequest request, IServerStreamWriter<EmployeeListResponse> responseStream, ServerCallContext context)
    {
        while (!context.CancellationToken.IsCancellationRequested)
        {
            _directoryService.RegisterHeartbeat(request.EmployeeId);
            await responseStream.WriteAsync(await _directoryService.GetEmployeeListResponseAsync());
            await Task.Delay(2000);
        }
    }

    public override async Task<LoginResponse> UpdateHybridSchedule(UpdateScheduleRequest request, ServerCallContext context)
    {
        _directoryService.RegisterHeartbeat(request.EmployeeId);
        var success = await _directoryService.UpdateHybridScheduleAsync(request.EmployeeId, request.Monday, request.Tuesday, request.Wednesday, request.Thursday, request.Friday);
        return new LoginResponse { Success = success, ErrorMessage = success ? "" : "Schedule record not found." };
    }

    public override async Task<ChatWindowResponse> SendMessage(ChatMessageRequest request, ServerCallContext context)
    {
        var msg = await _chatService.SaveMessageAsync(request.SenderId, request.ReceiverId, request.Text);
        await _chatService.BroadcastLiveMessageAsync(new ChatMessageResponse { SenderId = request.SenderId, ReceiverId = request.ReceiverId, Text = request.Text, Time = msg.Timestamp.ToLocalTime().ToString("HH:mm") });
        return new ChatWindowResponse { Success = true };
    }

    public override async Task ListenMessages(UserHeartbeatRequest request, IServerStreamWriter<ChatMessageResponse> responseStream, ServerCallContext context)
    {
        ChatService.ChatSubscribers.Add(responseStream);
        while (!context.CancellationToken.IsCancellationRequested)
        {
            _directoryService.RegisterHeartbeat(request.EmployeeId);
            await Task.Delay(2000);
        }
    }

    public override async Task<ChatHistoryResponse> GetChatHistory(ChatHistoryRequest request, ServerCallContext context)
    {
        var history = await _chatService.GetSharedHistoryAsync(request.SenderId, request.ReceiverId);
        var response = new ChatHistoryResponse();
        foreach (var m in history)
        {
            response.Messages.Add(new ChatMessageResponse { SenderId = m.SenderId, ReceiverId = m.ReceiverId, Text = m.Text, Time = m.Timestamp.ToLocalTime().ToString("HH:mm") });
        }
        return response;
    }

    public override async Task<MeetingListResponse> GetMeetings(MeetingRequest request, ServerCallContext context)
    {
        var response = new MeetingListResponse();
        var dbMeetings = await _meetingService.FetchAllMeetingsAsync();
        foreach (var m in dbMeetings)
        {
            var msg = new MeetingMessage { Id = m.Id, Title = m.Title, DepartmentName = m.DepartmentName, TimeString = m.TimeString, MeetLink = m.MeetLink };
            if (!string.IsNullOrWhiteSpace(m.AttendeeIds))
            {
                msg.AttendeeIds.AddRange(m.AttendeeIds.Split(',').Select(id => int.TryParse(id, out var parsed) ? parsed : 0).Where(id => id != 0));
            }
            response.Meetings.Add(msg);
        }
        return response;
    }
}
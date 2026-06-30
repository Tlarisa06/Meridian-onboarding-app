using backend.Data;
using backend.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

var jwtKey = "meridian_secret_security_key_with_proper_length_2026"; 
var keyBytes = Encoding.UTF8.GetBytes(jwtKey);

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(keyBytes)
    };
});

builder.Services.AddAuthorization();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()  
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
    });
});

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    });

// Enable gRPC services with detailed diagnostics and inject our custom Security Filter Chain
builder.Services.AddGrpc(options => 
{
    options.EnableDetailedErrors = true;
    options.Interceptors.Add<backend.Services.GrpcAuthInterceptor>();
});

builder.Services.AddOpenApi();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=meridian.db"));

// COURSE TOPIC: Register the Asynchronous Event Ecosystem components within the IoC Core Container
builder.Services.AddSingleton<ScheduleMessageBroker>(); // Message Exchange & Queue Storage Layer
builder.Services.AddHostedService<ScheduleQueueConsumer>(); // Background Queue Consumer Thread

builder.Services.AddScoped<DirectoryService>();
builder.Services.AddScoped<ChatService>();
builder.Services.AddScoped<MeetingService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseCors("AllowAll");
app.UseGrpcWeb(new GrpcWebOptions { DefaultEnabled = true });

app.UseAuthentication();
app.UseAuthorization();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<AppDbContext>();
        context.Database.Migrate();
        DbSeeder.SeedData(context);
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while migrating or seeding the database.");
    }
}

app.MapControllers();

app.MapGrpcService<backend.Services.EmployeeRpcServiceImpl>()
    .EnableGrpcWeb()
    .RequireCors("AllowAll");

app.Run();


// COURSE TOPIC: Message Consumer Background Service processing tasks detached from web threads
public class ScheduleQueueConsumer : BackgroundService
{
    private readonly ScheduleMessageBroker _broker;
    private readonly IServiceProvider _serviceProvider;
    private readonly ILogger<ScheduleQueueConsumer> _logger;

    public ScheduleQueueConsumer(ScheduleMessageBroker broker, IServiceProvider serviceProvider, ILogger<ScheduleQueueConsumer> logger)
    {
        _broker = broker;
        _serviceProvider = serviceProvider;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation("Asynchronous Schedule Message Queue Consumer started gracefully.");

        // Read messages from the async broker queue channel until stopping token demands shutdown
        await foreach (var scheduleEvent in _broker.Reader.ReadAllAsync(stoppingToken))
        {
            _logger.LogInformation($"Asynchronously consuming schedule change event payload for Employee {scheduleEvent.EmployeeId}");

            // Databases require a temporary transient scope validation sequence inside background workers
            using var scope = _serviceProvider.CreateScope();
            var directoryService = scope.ServiceProvider.GetRequiredService<DirectoryService>();

            try
            {
                await directoryService.UpdateHybridScheduleAsync(
                    scheduleEvent.EmployeeId,
                    scheduleEvent.Monday,
                    scheduleEvent.Tuesday,
                    scheduleEvent.Wednesday,
                    scheduleEvent.Thursday,
                    scheduleEvent.Friday
                );
                _logger.LogInformation($"Successfully flushed state change for employee {scheduleEvent.EmployeeId} down to SQLite store.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Failed to process relational update task for employee {scheduleEvent.EmployeeId}");
            }
        }
    }
}
using Grpc.Core;
using Grpc.Core.Interceptors;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace backend.Services;

// Course Architecture Alignment: Implements a custom filter chain equivalent to Spring Security
public class GrpcAuthInterceptor : Interceptor
{
    private readonly string _jwtSecret = "meridian_secret_security_key_with_proper_length_2026";

    public override async Task<TResponse> UnaryServerHandler<TRequest, TResponse>(
        TRequest request,
        ServerCallContext context,
        UnaryServerMethod<TRequest, TResponse> continuation)
    {
        var methodName = context.Method;

        // Bypass security filter context explicitly for the Login endpoint
        if (methodName.Contains("/Login", StringComparison.OrdinalIgnoreCase))
        {
            return await continuation(request, context);
        }

        // 1. Intercept incoming request metadata (Course Topic: Authentication Filter Chain)
        var authorizationHeader = context.RequestHeaders.FirstOrDefault(m => m.Key == "authorization")?.Value;

        if (string.IsNullOrEmpty(authorizationHeader) || !authorizationHeader.StartsWith("Bearer ", StringComparison.OrdinalIgnoreCase))
        {
            // Throw architectural equivalent of HTTP 401 Unauthorized
            throw new RpcException(new Status(StatusCode.Unauthenticated, "Missing or malformed Authorization token. Access denied."));
        }

        var tokenStr = authorizationHeader.Substring("Bearer ".Length).Trim();

        try
        {
            // 2. Validate token stateless claims dynamically (Course Topic: Token Validation Manager)
            var tokenHandler = new JwtSecurityTokenHandler();
            var keyBytes = Encoding.UTF8.GetBytes(_jwtSecret);

            tokenHandler.ValidateToken(tokenStr, new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(keyBytes)
            }, out SecurityToken validatedToken);

            // Access granted - delegate context safely to Domain Services / Controllers
            return await continuation(request, context);
        }
        catch (Exception)
        {
            // Throw architectural equivalent of HTTP 403 Forbidden
            throw new RpcException(new Status(StatusCode.PermissionDenied, "Invalid or expired cryptographic token signature. Access revoked."));
        }
    }

    // Handle authentication checks for Server Streaming pipelines (e.g., GetEmployees, ListenMessages)
    public override async Task ServerStreamingServerHandler<TRequest, TResponse>(
        TRequest request,
        IServerStreamWriter<TResponse> responseStream,
        ServerCallContext context,
        ServerStreamingServerMethod<TRequest, TResponse> continuation)
    {
        var authorizationHeader = context.RequestHeaders.FirstOrDefault(m => m.Key == "authorization")?.Value;

        if (string.IsNullOrEmpty(authorizationHeader) || !authorizationHeader.StartsWith("Bearer ", StringComparison.OrdinalIgnoreCase))
        {
            throw new RpcException(new Status(StatusCode.Unauthenticated, "Missing Authorization token on stream interface."));
        }

        var tokenStr = authorizationHeader.Substring("Bearer ".Length).Trim();

        try
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var keyBytes = Encoding.UTF8.GetBytes(_jwtSecret);

            tokenHandler.ValidateToken(tokenStr, new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(keyBytes)
            }, out SecurityToken validatedToken);

            await continuation(request, responseStream, context);
        }
        catch (Exception)
        {
            throw new RpcException(new Status(StatusCode.PermissionDenied, "Invalid streaming pipeline token signature."));
        }
    }
}
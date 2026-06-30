import * as grpcWeb from "grpc-web";
import { meridian } from "../protos/meridian_compiled";

const SERVER_URL = "http://localhost:5266";
const client = new grpcWeb.GrpcWebClientBase({});

// Helper to inject the authorization token metadata dynamically into gRPC pipes
const getAuthMetadata = () => {
    const token = localStorage.getItem("meridian_token");
    return token ? { "authorization": `Bearer ${token}` } : {};
};

// Open a persistent message subscription channel matching user heartbeats
export const subscribeToMessages = (employeeId, onMessageReceived) => {
    const methodDescriptor = new grpcWeb.MethodDescriptor(
        "/meridian.EmployeeRpcService/ListenMessages",
        grpcWeb.MethodType.SERVER_STREAMING,
        Object,
        Object,
        (request) => {
            const reqMessage = meridian.UserHeartbeatRequest.create({ employeeId: Number(request.employeeId) });
            return meridian.UserHeartbeatRequest.encode(reqMessage).finish();
        },
        (bytes) => meridian.ChatMessageResponse.decode(bytes)
    );

    // COURSE TOPIC: Intercepting Streaming Pipes with Authorization Metadata Headers
    const stream = client.serverStreaming(
        SERVER_URL + "/meridian.EmployeeRpcService/ListenMessages",
        { employeeId: Number(employeeId) },
        getAuthMetadata(), // Inject JWT verification bearer token
        methodDescriptor
    );

    stream.on("data", (response) => {
        if (response) {
            onMessageReceived({
                senderId: Number(response.senderId ?? response.sender_id ?? response.SenderId ?? 0),
                receiverId: Number(response.receiverId ?? response.receiver_id ?? response.ReceiverId ?? 0),
                text: response.text ?? response.Text ?? "",
                time: response.time ?? response.Time ?? ""
            });
        }
    });

    return () => stream.cancel();
};

// Transmit chat message payload using forced camelCase fields
export const sendChatMessage = (senderId, receiverId, text) => {
    return new Promise((resolve, reject) => {
        const methodDescriptor = new grpcWeb.MethodDescriptor(
            "/meridian.EmployeeRpcService/SendMessage",
            grpcWeb.MethodType.UNARY,
            Object,
            Object,
            (request) => {
                const reqMessage = meridian.ChatMessageRequest.create({
                    senderId: Number(request.senderId),
                    receiverId: Number(request.receiverId),
                    text: request.text
                });
                return meridian.ChatMessageRequest.encode(reqMessage).finish();
            },
            (bytes) => meridian.ChatWindowResponse.decode(bytes)
        );

        // COURSE TOPIC: Securing Unary API Requests with Stateless Authorizations
        client.rpcCall(
            SERVER_URL + "/meridian.EmployeeRpcService/SendMessage",
            { senderId: Number(senderId), receiverId: Number(receiverId), text },
            getAuthMetadata(), // Inject JWT verification bearer token
            methodDescriptor,
            (err, response) => {
                if (err) reject(err);
                else resolve(response);
            }
        );
    });
};

// Request complete message history collections from the relational store
export const getChatHistory = (senderId, receiverId) => {
    return new Promise((resolve, reject) => {
        const methodDescriptor = new grpcWeb.MethodDescriptor(
            "/meridian.EmployeeRpcService/GetChatHistory",
            grpcWeb.MethodType.UNARY,
            Object,
            Object,
            (request) => {
                const reqMessage = meridian.ChatHistoryRequest.create({
                    senderId: Number(request.senderId),
                    receiverId: Number(request.receiverId)
                });
                return meridian.ChatHistoryRequest.encode(reqMessage).finish();
            },
            (bytes) => meridian.ChatHistoryResponse.decode(bytes)
        );

        client.rpcCall(
            SERVER_URL + "/meridian.EmployeeRpcService/GetChatHistory",
            { senderId: Number(senderId), receiverId: Number(receiverId) },
            getAuthMetadata(), // Inject JWT verification bearer token
            methodDescriptor,
            (err, response) => {
                if (err) reject(err);
                else {
                    const messages = response.messages ?? response.Messages ?? [];
                    resolve(messages);
                }
            }
        );
    });
};
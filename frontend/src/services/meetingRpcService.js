import * as grpcWeb from "grpc-web";
import { meridian } from "../protos/meridian_compiled";

const SERVER_URL = "http://localhost:5266";
const client = new grpcWeb.GrpcWebClientBase({});

// Helper to inject the authorization token metadata dynamically into gRPC pipes
const getAuthMetadata = () => {
    const token = localStorage.getItem("meridian_token");
    return token ? { "authorization": `Bearer ${token}` } : {};
};

// CRITICAL EXPORT: This matches the exact token import name throwing the error
export const getMeetings = (employeeId, departmentName) => {
    return new Promise((resolve, reject) => {
        const methodDescriptor = new grpcWeb.MethodDescriptor(
            "/meridian.EmployeeRpcService/GetMeetings",
            grpcWeb.MethodType.UNARY,
            Object,
            Object,
            (request) => {
                const reqMessage = meridian.MeetingRequest.create({
                    employeeId: Number(request.employeeId),
                    departmentName: request.departmentName
                });
                return meridian.MeetingRequest.encode(reqMessage).finish();
            },
            (bytes) => meridian.MeetingListResponse.decode(bytes)
        );

        client.rpcCall(
            SERVER_URL + "/meridian.EmployeeRpcService/GetMeetings",
            { employeeId: Number(employeeId), departmentName },
            getAuthMetadata(), // Inject JWT token vector into metadata header
            methodDescriptor,
            (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    // Extract the meetings array safely matching compiled proto structures
                    const meetings = response.meetings ?? response.Meetings ?? [];
                    resolve(meetings);
                }
            }
        );
    });
};
import * as grpcWeb from "grpc-web";
import { meridian } from "../protos/meridian_compiled";

const SERVER_URL = "http://localhost:5266";
const client = new grpcWeb.GrpcWebClientBase({});

// Request all department and personalized meetings for the logged-in session
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
            {},
            methodDescriptor,
            (err, response) => {
                if (err) reject(err);
                else {
                    const meetings = response.meetings ?? response.Meetings ?? [];
                    resolve(meetings);
                }
            }
        );
    });
};
import * as grpcWeb from "grpc-web";
import { meridian } from "../protos/meridian_compiled";

const SERVER_URL = "http://localhost:5266";
const client = new grpcWeb.GrpcWebClientBase({});

export const subscribeToEmployees = (onDataReceived, onErrorReceived) => {
    const methodDescriptor = new grpcWeb.MethodDescriptor(
        "/meridian.EmployeeRpcService/GetEmployees",
        grpcWeb.MethodType.SERVER_STREAMING,
        Object,
        Object,
        (request) => new Uint8Array(0),
        (bytes) => meridian.EmployeeListResponse.decode(bytes)
    );

    const stream = client.serverStreaming(
        SERVER_URL + "/meridian.EmployeeRpcService/GetEmployees",
        {},
        {},
        methodDescriptor
    );

    stream.on("data", (response) => {
        if (response && response.employees) {
            onDataReceived(response.employees);
        }
    });

    stream.on("error", (err) => {
        console.error("gRPC Stream Event Error:", err);
        onErrorReceived(err);
    });

    return () => {
        stream.cancel();
    };
};

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        const methodDescriptor = new grpcWeb.MethodDescriptor(
            "/meridian.EmployeeRpcService/Login",
            grpcWeb.MethodType.UNARY,
            Object,
            Object,
            (request) => {
                const reqMessage = meridian.LoginRequest.create(request);
                return meridian.LoginRequest.encode(reqMessage).finish();
            },
            (bytes) => {
                return meridian.LoginResponse.decode(bytes);
            }
        );

        client.rpcCall(
            SERVER_URL + "/meridian.EmployeeRpcService/Login",
            { username, password },
            {},
            methodDescriptor,
            (err, response) => {
                if (err) {
                    console.error("gRPC Login Error:", err);
                    reject(err);
                } else {
                    resolve(response);
                }
            }
        );
    });
};

export const updateHybridSchedule = (employeeId, updatedSchedule) => {
    return new Promise((resolve, reject) => {
        const methodDescriptor = new grpcWeb.MethodDescriptor(
            "/meridian.EmployeeRpcService/UpdateHybridSchedule",
            grpcWeb.MethodType.UNARY,
            Object,
            Object,
            (request) => {
                const payload = {
                    employeeId: request.employeeId,
                    monday: request.monday,
                    tuesday: request.tuesday,
                    wednesday: request.wednesday,
                    thursday: request.thursday,
                    friday: request.friday
                };
                const reqMessage = meridian.UpdateScheduleRequest.create(payload);
                return meridian.UpdateScheduleRequest.encode(reqMessage).finish();
            },
            (bytes) => {
                // Decode and convert protobuf to plain JS object
                const decoded = meridian.LoginResponse.decode(bytes);
                return meridian.LoginResponse.toObject(decoded, {
                    defaults: true,
                    enums: String
                });
            }
        );

        client.rpcCall(
            SERVER_URL + "/meridian.EmployeeRpcService/UpdateHybridSchedule",
            {
                employeeId,
                monday: updatedSchedule.monday,
                tuesday: updatedSchedule.tuesday,
                wednesday: updatedSchedule.wednesday,
                thursday: updatedSchedule.thursday,
                friday: updatedSchedule.friday
            },
            {},
            methodDescriptor,
            (err, response) => {
                if (err) {
                    console.error("gRPC Update Schedule Error:", err);
                    reject(err);
                } else {
                    resolve(response); // Returns plain JS object: { success: true/false, ... }
                }
            }
        );
    });
};
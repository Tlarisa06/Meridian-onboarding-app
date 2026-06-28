import * as grpcWeb from "grpc-web";
import { meridian } from "../protos/meridian_compiled";

const SERVER_URL = "http://localhost:5266";
const client = new grpcWeb.GrpcWebClientBase({});

// Establish a server-streaming connection to track the global employee directory
export const subscribeToEmployees = (employeeId, onDataReceived, onErrorReceived) => {
    const methodDescriptor = new grpcWeb.MethodDescriptor(
        "/meridian.EmployeeRpcService/GetEmployees",
        grpcWeb.MethodType.SERVER_STREAMING,
        Object,
        Object,
        (request) => {
            const reqMessage = meridian.UserHeartbeatRequest.create({ employeeId: Number(request.employeeId) });
            return meridian.UserHeartbeatRequest.encode(reqMessage).finish();
        },
        (bytes) => meridian.EmployeeListResponse.decode(bytes)
    );

    const stream = client.serverStreaming(
        SERVER_URL + "/meridian.EmployeeRpcService/GetEmployees",
        { employeeId: Number(employeeId) },
        {},
        methodDescriptor
    );

    stream.on("data", (response) => {
        if (response && response.employees) {
            const normalizedEmployees = response.employees.map(emp => {
                const rawSchedule = emp.hybridSchedule ?? emp.HybridSchedule ?? emp.hybrid_schedule;
                return {
                    id: Number(emp.id ?? emp.Id ?? 0),
                    firstName: emp.firstName ?? emp.FirstName ?? emp.first_name ?? "",
                    lastName: emp.lastName ?? emp.LastName ?? emp.last_name ?? "",
                    slackHandle: emp.slackHandle ?? emp.SlackHandle ?? emp.slack_handle ?? "",
                    hireDate: emp.hireDate ?? emp.HireDate ?? emp.hire_date ?? "",
                    isOnline: !!emp.isOnline || !!emp.IsOnline,
                    department: emp.department ? {
                        id: Number(emp.department.id ?? emp.department.Id ?? 0),
                        name: emp.department.name ?? emp.department.Name ?? ""
                    } : null,
                    hybridSchedule: rawSchedule ? {
                        monday: !!rawSchedule.monday || !!rawSchedule.Monday,
                        tuesday: !!rawSchedule.tuesday || !!rawSchedule.Tuesday,
                        wednesday: !!rawSchedule.wednesday || !!rawSchedule.Wednesday,
                        thursday: !!rawSchedule.thursday || !!rawSchedule.Thursday,
                        friday: !!rawSchedule.friday || !!rawSchedule.Friday
                    } : null
                };
            });
            onDataReceived(normalizedEmployees);
        }
    });

    stream.on("error", (err) => {
        console.error("gRPC Stream Event Error:", err);
        onErrorReceived(err);
    });

    return () => stream.cancel();
};

// Push attendance modification payload to update personal work routines
export const updateHybridSchedule = (employeeId, updatedSchedule) => {
    return new Promise((resolve, reject) => {
        const methodDescriptor = new grpcWeb.MethodDescriptor(
            "/meridian.EmployeeRpcService/UpdateHybridSchedule",
            grpcWeb.MethodType.UNARY,
            Object,
            Object,
            (request) => {
                const reqMessage = meridian.UpdateScheduleRequest.create({
                    employeeId: Number(request.employeeId),
                    monday: !!request.monday,
                    tuesday: !!request.tuesday,
                    wednesday: !!request.wednesday,
                    thursday: !!request.thursday,
                    friday: !!request.friday
                });
                return meridian.UpdateScheduleRequest.encode(reqMessage).finish();
            },
            (bytes) => meridian.LoginResponse.decode(bytes)
        );

        client.rpcCall(
            SERVER_URL + "/meridian.EmployeeRpcService/UpdateHybridSchedule",
            {
                employeeId: Number(employeeId),
                monday: updatedSchedule.monday,
                tuesday: updatedSchedule.tuesday,
                wednesday: updatedSchedule.wednesday,
                thursday: updatedSchedule.thursday,
                friday: updatedSchedule.friday
            },
            {},
            methodDescriptor,
            (err, response) => {
                if (err) reject(err);
                else resolve(response);
            }
        );
    });
};
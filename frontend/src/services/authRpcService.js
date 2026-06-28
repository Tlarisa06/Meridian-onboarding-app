import * as grpcWeb from "grpc-web";
import { meridian } from "../protos/meridian_compiled";

const SERVER_URL = "http://localhost:5266";
const client = new grpcWeb.GrpcWebClientBase({});

// Dispatch a unary credentials payload invocation link
export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        const methodDescriptor = new grpcWeb.MethodDescriptor(
            "/meridian.EmployeeRpcService/Login",
            grpcWeb.MethodType.UNARY,
            Object,
            Object,
            (request) => {
                const reqMessage = meridian.LoginRequest.create({ username: request.username, password: request.password });
                return meridian.LoginRequest.encode(reqMessage).finish();
            },
            (bytes) => meridian.LoginResponse.decode(bytes)
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
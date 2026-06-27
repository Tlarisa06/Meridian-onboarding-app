import * as grpcWeb from "grpc-web";
import { EmployeeListResponse } from "../protos/meridian";

const SERVER_URL = "http://localhost:5266";
const client = new grpcWeb.GrpcWebClientBase({});

export const subscribeToEmployees = (onDataReceived, onErrorReceived) => {

    const methodDescriptor = new grpcWeb.MethodDescriptor(
        "/meridian.EmployeeRpcService/GetEmployees",
        grpcWeb.MethodType.SERVER_STREAMING,
        Object,
        EmployeeListResponse,
        (request) => new Uint8Array(0),
        (bytes) => EmployeeListResponse.decode(bytes)
    );

    // Specificăm explicit SERVER_URL ca prim parametru pentru a nu mai trimite cereri către localhost:5173
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

    stream.on("status", (status) => {
        if (status.code !== 0) {
            console.log("gRPC Stream Status:", status.metadata);
        }
    });

    return () => {
        stream.cancel();
    };
};
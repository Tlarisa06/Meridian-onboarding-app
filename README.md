# Meridian Onboarding Portal

An internal application designed for managing company onboarding profiles and structural planning.

## 🛠️ Tech Stack & Architecture

* **Frontend:** React.js, gRPC-Web client, Protobuf.js
* **Backend:** .NET 10 (ASP.NET Core gRPC Service), Entity Framework Core, SQLite
* **Protocol:** Protocol Buffers (Proto3)

## ⚡ gRPC Code Generation

If you modify the `meridian.proto` file, you must regenerate the frontend communication stubs. Run the following command from the frontend root directory:

```bash
npm run generate-proto
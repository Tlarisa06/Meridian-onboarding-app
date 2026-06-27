# Technical and Product Decisions

## Product Decisions
* **Included:** Directory of all 200 employees split by department and a hybrid work week planner.
* **Excluded:** Full-scale internal chat feature (links out to Slack instead).

## Technical Decisions
* **Backend:** ASP.NET Core with C# (.NET 10) utilizing **gRPC Services** for high-performance, strongly-typed communication.
* **Database:** SQLite with Entity Framework Core, utilizing `AsNoTracking()` on data streams to bypass internal caching and ensure real-time consistency.
* **Communication:** **gRPC-Web** to enable bidirectional and server-streaming communication between the browser and the backend server.
* **Frontend:** React (JavaScript) integrated with compiled `protobufjs` modules for native protocol buffer decoding and plain object mapping.

## UX Decisions
* A clean, single-page application flow to minimize confusion on day one.
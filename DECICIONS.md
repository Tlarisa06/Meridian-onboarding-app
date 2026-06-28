# Technical and Product Decisions

## Product Decisions
* **Included:** Directory of all 200 employees split by department, a hybrid work week planner, and an **integrated internal peer-to-peer chat feature**.
* **Chat Capabilities:** The communication engine includes real-time message broadcasting, automatic client-side duplication filters, and chronological historical lookups.
* **Excluded:** External communication tools (the chat feature is now entirely native, removing dependencies on links out to Slack).

## Technical Decisions
* **Backend:** ASP.NET Core with C# (.NET 10) utilizing **gRPC Services** for high-performance, strongly-typed communication.
* **Database:** SQLite with Entity Framework Core, utilizing `AsNoTracking()` on directory data streams to bypass internal caching and ensure real-time consistency.
* **Database Storage for Chat:** Chat messages are permanently stored in a relational `ChatMessages` table, indexing the unique combination of sender, receiver, textual payload, and a universal UTC timestamp.
* **Communication:** **gRPC-Web** to enable bidirectional and server-streaming communication between the browser and the backend server.
* **Frontend:** React (JavaScript) integrated with compiled `protobufjs` modules for native protocol buffer decoding, thread-safe session tracking, and plain object mapping.

## UX Decisions
* A clean, single-page application flow featuring a responsive, collapsible sidebar chat window to minimize confusion on day one.
* **Smart UI Elements:** Messages are dynamically aligned based on ownership (sent messages anchor right in blue, received messages anchor left in gray). The interface features real-time timezone adaptation to the employee's machine local time and inline user presence indicators (online/offline status dots).
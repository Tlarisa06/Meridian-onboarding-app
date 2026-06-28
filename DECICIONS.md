# Technical and Product Decisions

## Product Decisions
* **Included:** Directory of all 200 employees split by department, a hybrid work week planner, an **integrated internal peer-to-peer chat feature**, and a **Google Meet Shared & Personalized Schedule engine**.
* **Chat Capabilities:** The communication engine includes real-time message broadcasting, automatic client-side duplication filters, and chronological historical lookups.
* **Meeting Capabilities:** Displays a dual-column timeline that segments wide-scale organizational synchronization meetings from custom 1-on-1 onboarding tracks.
* **Excluded:** External communication tools (the chat feature is now entirely native, removing dependencies on links out to Slack).

## Technical Decisions
* **Backend Framework:** ASP.NET Core with C# (.NET 10) utilizing **gRPC Services** for high-performance, strongly-typed communication.
* **Backend Architecture:** Refactored into a highly decoupled **Domain Services Architecture** using Dependency Injection (`DirectoryService`, `ChatService`, `MeetingService`) to enforce strict separation of concerns and honor the Single Responsibility Principle (SOLID).
* **Database:** SQLite with Entity Framework Core, utilizing `AsNoTracking()` on directory data streams to bypass internal caching and ensure real-time consistency.
* **Database Storage Layers:**
    * Chat messages are permanently stored in a relational `ChatMessages` table, indexing the unique combination of sender, receiver, textual payload, and a universal UTC timestamp.
    * Onboarding tracks, company syncs, and custom meetings are permanently persisted within a relational `Meetings` table, mapping targeted user visibility through comma-separated attendee ID filters.
* **Communication:** **gRPC-Web** to enable bidirectional and server-streaming communication between the browser and the backend server.
* **Frontend:** React (JavaScript) integrated with compiled `protobufjs` modules for native protocol buffer decoding, thread-safe session tracking, defensive multi-format property resolution (handling camelCase, PascalCase, and snake_case variations seamlessly), and plain object mapping.

## UX Decisions
* A clean, single-page application flow featuring a responsive, collapsible sidebar chat window to minimize confusion on day one.
* **Smart UI Elements:** Messages are dynamically aligned based on ownership (sent messages anchor right in blue, received messages anchor left in gray). The interface features real-time timezone adaptation to the employee's machine local time and inline user presence indicators (online/offline status dots).
# DECISIONS

This document provides a comprehensive analysis of the architectural, technical, and product design decisions made during the development of the Meridian Onboarding Portal.

## 1. Product Decisions

### Included Core Features
* **Dynamic 200-Employee Directory:** A fully searchable organizational registry that segments Meridian's workforce by department (Engineering, Sales, Marketing, HR, Finance) to eliminate the initial corporate isolation felt by new hires.
* **Hybrid Work Week Planner:** A functional coordinator allowing employees to log and manage their mandatory ratio of 3 office days and 2 remote days.
* **Native Peer-to-Peer Chat Engine:** An integrated communication hub that establishes an immediate, direct line of contact between new employees, peers, and HR coordinators.
* **Segmented Onboarding Calendar Tracker:** A structured schedule dashboard displaying critical company-wide synchronization events alongside personalized 1-on-1 mentorship checkpoints.

### Advanced Component Capabilities
* **Bidirectional Communication Stream:** The internal chat engine features real-time message broadcasting, automatic client-side message duplication filters, and instant historical lookup retrieval upon opening an active session.
* **Dual-Column Schedule Matrix:** The timeline component isolates wide-scale company events (e.g., HR orientation) from private, highly-focused onboarding setups to keep the employee's first week clearly organized.

### Features Intentionally Left Out of Scope
* **External Third-Party Integrations:** External links to separate tools like Slack or Google Meet were deliberately kept out of scope. The chat and schedule tracking engines were engineered completely natively to minimize context-switching and keep the newcomer's interface entirely self-contained.
* **Complex Role-Based Administration Management:** Advanced user administration, permission auditing, and bulk profile editing were excluded to focus development efforts on refining the real-time synchronization pipelines used by the end-user.

---

## 2. Technical Decisions

### Backend Framework & Architectural Patterns
* **Framework Selection:** Built using ASP.NET Core with C# (.NET) leveraging high-performance **gRPC Services** as the core communication layer. gRPC was chosen over traditional REST to enforce a strongly-typed contract using Protocol Buffers, significantly reducing serialization overhead.
* **Domain Services Architecture:** The backend was refactored away from heavy controllers into an decoupled domain service layer utilizing explicit Dependency Injection (`DirectoryService`, `ChatService`, `MeetingService`). This pattern strictly enforces the Single Responsibility Principle (SRP) and ensures modularity.

### Data Storage & Persistence Layer
* **Database Engine:** SQLite was chosen alongside Entity Framework Core (EF Core) to maintain a zero-configuration, lightweight relational storage footprint that runs flawlessly out of the box.
* **Performance Optimizations:** Real-time directory data streams utilize `AsNoTracking()` queries within EF Core. This bypasses the framework's internal tracking graph cache, reducing memory allocation and ensuring real-time read consistency directly from the persistent store.
* **Storage Relational Design:**
  * *Chat Ledger:* Handled via a relational `ChatMessages` table that maps the unique combination of sender IDs, recipient IDs, textual payloads, and a precise UTC timestamp.
  * *Meeting Maps:* Handled via a centralized `Meetings` table, which dynamically parses individual attendee visibilities through structured ID queries.

### Network Communication & Client-Side Processing
* **Protocol Bridging:** **gRPC-Web** was implemented to allow a React browser client to interact natively with HTTP/2 gRPC backend services over standard browser HTTP channels.
* **Frontend Serialization:** Built on React, leveraging compiled `protobufjs` bundles for native protocol buffer decoding on the client side. The frontend features multi-format property resolution to handle data serialization schemas (mapping camelCase, PascalCase, and snake_case variations gracefully) and plain object mapping to guarantee UI rendering stability.

---

## 3. UX Decisions

* **Single-Page Application (SPA) Flow:** Designed as an intuitive single-page workflow featuring a highly accessible, collapsible sidebar layout. This architecture minimizes cognitive load and prevents a new employee from getting lost across multiple browser tabs during their critical first day.
* **Contextual UI Anchoring:** Chat text bubbles are dynamically aligned and colored based on structural ownership. Messages sent by the current user anchor tightly to the right in blue, while incoming messages anchor to the left in gray to mirror modern consumer communication designs.
* **Temporal and Presence Feedback Layers:** The client automatically converts raw UTC timestamps from the backend into the machine's local time zone for intuitive calendar reading. Furthermore, inline status presence dots (green/gray) instantly reflect real-time heartbeat connectivity states across the workspace.
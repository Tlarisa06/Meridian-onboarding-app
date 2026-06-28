# Meridian Onboarding Portal

An internal application designed for managing company onboarding profiles, structural planning, and real-time peer-to-peer communication during a new hire's integration phase.

---

# Project Assumptions

## About the Users
* **New Employee:** Opens the app on day one with no prior network or company knowledge.
* **HR Manager:** A single person managing the onboarding process efficiently for 2-3 newcomers per month.

## About the Data
* **Source:** The initial corporate roster is pre-seeded via a data seeder engine creating a balanced distribution based on 200 existing employees.
* **Updates:** Hybrid schedules are maintained and customized directly by the employees. Any schedule modifications or newly exchanged chat messages trigger instant, real-time updates across the application layout via live gRPC streams without requiring manual page refreshes.

## About the Context
* **Access:** New hires securely access the application locally on their first working day.

---

# Technical and Product Decisions

## Product Decisions
* **Included:**
    * Dynamic directory of all 200 employees split by department.
    * Expandable accordion views to simplify organizational browsing.
    * Real-time hybrid work week planner tracking office vs. remote days.
    * Integrated internal chat feature for instant onboarding communication.
* **Excluded:** External communication or network tools (the chat feature is entirely native, eliminating dependencies on external links like Slack).

## Technical Decisions
* **Backend:** ASP.NET Core with C# (.NET 10) utilizing **gRPC Services** for high-performance, strongly-typed communication.
* **Database:** SQLite with Entity Framework Core, utilizing `AsNoTracking()` on directory data streams to bypass internal caching and ensure real-time consistency. Chat messages are permanently stored chronologically.
* **Communication:** **gRPC-Web** to enable bidirectional and server-streaming communication between the browser and the backend server.
* **Frontend:** React (JavaScript) integrated with compiled `protobufjs` modules for native protocol buffer decoding, thread-safe session tracking, and plain object mapping.

## UX Decisions
* A clean, single-page application (SPA) flow featuring a responsive, collapsible sidebar chat window to minimize confusion on day one.
* **Smart UI Elements:** Messages are dynamically aligned based on ownership (sent messages anchor right in blue, received messages anchor left in gray). The interface features real-time timezone adaptation to the employee's machine local time and inline user presence indicators (online/offline status dots).

---

# Application Architecture & Core Features

The Meridian Portal establishes a highly decoupled architecture split across dedicated functional layers:

### 📁 1. Directory & Hybrid Scheduling
* **Dynamic Grouping & Sorting:** The frontend processes raw data inputs to group profiles dynamically by department name and automatically sorts them alphabetically by full name.
* **Tenure Analytics:** Automatically computes corporate seniority intervals in months from absolute JSON string dates relative to the active runtime clock.
* **Visual Work Planner:** Renders an intuitive attendance grid separating `🏢 Office` and `🏠 Remote` days through vibrant, color-coded dashboard indicators.

### 📁 2. Core Chat Engine
* **Database Persistence Layer:** Permanent relational storage tracks structural entities for every single message via a dedicated database snapshot, ensuring logs survive application restarts.
* **Network Interface Contract (Proto3):**
    * *Unary Actions:* Exposes strict binarized invocation routes for sending messages (`SendMessage`) and requesting logs (`GetChatHistory`).
    * *Server-to-Client Streaming:* Establishes a persistent, continuous stream (`ListenMessages`) to push inbound traffic instantly to active listening nodes.
* **Asynchronous Distribution Engine:** Iterates through a thread-safe `ConcurrentBag` collection of open client channels to route freshly arrived payloads instantaneously using an asynchronous fan-out strategy.
* **Timezone Shifting:** Automatically converts the centralized UTC server storage timestamps into local user display strings (`ToLocalTime()`) upon history requests.
* **Idempotent State Ingestion:** Implements strict duplication filters checking matching combinations of text content, timestamps, and originators to prevent overlapping anomalies between the history log and live streams.

---

# ⚡ Getting Started & Development

### Backend Requirements
* .NET 10 SDK
* SQLite Enterprise tools

To spin up the backend server, navigate to the backend root directory and run:
```bash
dotnet run
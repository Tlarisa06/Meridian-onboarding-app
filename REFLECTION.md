# REFLECTION

This document contains a personal and professional reflection on the technical challenges, architectural pivots, and engineering lessons discovered throughout the development of the Meridian Onboarding Portal.

## 1. What turned out to be harder than you expected?

Implementing the real-time chat infrastructure using bidirectional gRPC streams turned out to be significantly more challenging than initially anticipated. Managing asynchronous, persistent network connections on the backend while trying to safely broadcast live messages without dropping active channels required a deep dive into thread-safe collections, multi-threaded task management, and thread-safe locks.

Additionally, on the frontend layer, handling gRPC-Web payload structures and dealing with variable naming mismatches introduced a lot of friction. Navigating `camelCase`, `PascalCase`, and `snake_case` variations across automatically generated JavaScript stubs added an unexpected layer of structural debugging before data could safely render on the user interface.

## 2. Which decision would you make differently if you started over?

If I were to start the project over from scratch, I would separate the application into modular, decoupled **Domain Services** right from day one, rather than building a monolithic RPC service handler.

Initially, the gRPC handler class grew rapidly into a massive "God Object" holding database queries, data mapping, and networking logic all in one place. Refactoring it later into separated domain layers (`DirectoryService`, `ChatService`, `MeetingService`) made the codebase immensely cleaner, testable, and easier to maintain. However, planning this architecture from the absolute beginning would have saved a significant amount of development time and initial debugging overhead.

## 3. What did you learn about yourself as a developer during this project?

This project taught me how to embrace architectural ambiguity and turn an open-ended problem statement into a structured, production-ready software solution. I learned that I highly enjoy designing modular, maintainable backend structures and that taking the extra time to refactor complex implementations into clean, single-responsibility services brings me great professional satisfaction as an engineer.

It also reinforced my capability to quickly adapt to new protocols like gRPC-Web and asynchronous message patterns, bridging the gap between strong backend systems and responsive modern user interfaces.
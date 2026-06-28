# Reflection

### What turned out to be harder than you expected?
Implementing the real-time chat infrastructure using bi-directional gRPC streams turned out to be significantly more challenging than initially anticipated. Managing asynchronous, persistent connections on the backend while trying to safely broadcast live messages without dropping active channels required a deep dive into thread-safe collections (`ConcurrentBag`, `ConcurrentDictionary`).

Additionally, on the frontend layer, handling gRPC-Web payload structures and dealing with variable naming mismatches (such as navigating CamelCase, PascalCase, and SnakeCase variations across automatically generated stubs) added an unexpected layer of structural debugging.

### Which decision would you make differently if you started over?
If I were to start the project over from scratch, I would separate the application into modular **Domain Services** right from day one, rather than building a monolithic `EmployeeRpcServiceImpl`.

Initially, the gRPC handler class grew rapidly into a massive "God Object" holding database queries, data mapping, and networking logic all in one place. Refactoring it later into decoupled domain layers (`DirectoryService`, `ChatService`, `MeetingService`) made the codebase immensely cleaner and easier to maintain, but planning this architecture from the beginning would have saved significant development time.

### What did you learn about yourself as a developer during this project?
This project taught me how to embrace architectural ambiguity and turn an open-ended problem statement into a structured web solution. I learned that I enjoy designing highly modular, maintainable backend code and that taking the time to refactor messy implementations into clean, single-responsibility services brings me great professional satisfaction as an engineer.
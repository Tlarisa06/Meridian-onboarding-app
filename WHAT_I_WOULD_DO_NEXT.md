# What I Would Do Next

If I were granted two additional weeks to expand the Meridian Onboarding Portal, I would prioritize the following features to add immediate value and scalability:

### 🚀 Priority 1 — Features that would fundamentally improve the experience
*   **HR Admin Dashboard Panel:** Build a dedicated administrative screen for the sole HR team member to dynamically schedule, modify, or cancel onboarding meetings directly in the SQLite database. Currently, meetings are populated statically via the database seeder.
*   **Persistent User Sessions & Formal Authentication:** Implement secure JSON Web Tokens (JWT) or session cookies to ensure user logins persist across page refreshes, replacing the current mock authentication token.

### 💎 Priority 2 — Features that would add significant value
*   **Real-Time Calendar Notification Engine:** Introduce an inbound gRPC server-side streaming channel that sends browser push notifications or banner alerts 5 minutes before a personalized Google Meet onboarding session is scheduled to begin.
*   **Document Checklist & Progress Tracker:** Add an onboarding checklist tab where new hires can track their progress through mandatory readings, technical environment setups, and introductory videos.

### ✨ Priority 3 — Nice-to-have improvements and why they matter
*   **Slack Webhook Integration:** Connect chat interactions or meeting announcements directly to a live slack workspace via webhooks. Since Meridian relies on Slack, this bridges the onboarding portal with the company's existing daily workflows.
*   **Advanced Chat Features:** Enhance the side-panel communication component by adding typing indicators ("typing..."), read receipts, and support for basic Markdown formatting in textual exchanges.
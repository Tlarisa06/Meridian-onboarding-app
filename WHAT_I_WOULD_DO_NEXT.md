# WHAT_I_WOULD_DO_NEXT.md

This document outlines the strategic roadmap and architectural enhancements planned for the Meridian Onboarding Portal if granted an extended two-week development sprint.

## 1. 🚀 Priority 1 — Core Experience & Operational Scaling

*   **HR Administrative Dashboard Panel:** Build a dedicated administrative interface for the sole HR team member to dynamically schedule, modify, or cancel onboarding tracks directly in the relational persistent store. Currently, meeting baselines are populated via database seeds. Providing a secure CRUD dashboard removes the need for manual database updates and empowers HR to manage newcomers self-sufficiently.
*   **Advanced Cryptographic Session Lifecycles (Refresh Tokens):** While the application currently utilizes cryptographically signed stateless JSON Web Tokens (JWT) saved in Local Storage, a valuable next step would be implementing a rotating **Refresh Token pattern** combined with a server-side Token Revocation Ledger. This addition would allow the system to instantly invalidate compromised sessions and securely renew access tokens in the background without forcing the employee to log out during an active stream session.

## 2. 💎 Priority 2 — Real-Time Engagement & Interactive Tracking

*   **Proactive gRPC Calendar Notification Engine:** Introduce a dedicated inbound gRPC server-side streaming channel that monitors the centralized `Meetings` table and pushes immediate, desktop-level banner alerts exactly 5 minutes before an onboarding track or a Google Meet session is scheduled to begin. This ensures the newcomer never misses a critical day-one alignment checkpoint.
*   **Interactive Onboarding Checklist & Progress Tracker:** Add a gamified progress tracking tab where new hires can view, complete, and track their progress through mandatory corporate readings, hardware setups, and initial introductory modules. The state would update dynamically over the network, providing HR with a birds-eye view of completion rates.

## 3. ✨ Priority 3 — Ecosystem Integration & UX Refinements

*   **External Slack Webhook Integration:** Connect critical chat highlights or urgent meeting reminders directly to an external, corporate Slack channel using outgoing webhooks. This bridges the onboarding portal with Meridian's existing daily toolstack, smoothing the transition for the newcomer into the wider organizational workflow.
*   **Rich Communication Layer Enhancements:** Elevate the peer-to-peer chat module by adding advanced UX status updates, including active typing indicators ("Dani is typing..."), delivery/read receipts, and inline Markdown parsing to support code blocks and text formatting during technical onboarding exchanges.
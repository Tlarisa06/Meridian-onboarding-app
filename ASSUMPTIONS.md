# ASSUMPTIONS

This document outlines the core architectural boundaries, user workflows, and data baselines assumed during the development of the Meridian Onboarding Portal.

## 1. About the Users
* **The New Employee:** It is assumed that on day one, a new hire opens the application with zero prior network knowledge, no established corporate credentials, and no physical connection to colleagues. The system assumes a completely unassisted initialization phase where the user must immediately grasp the corporate landscape from a single web dashboard.
* **The HR Manager:** The platform assumes that a single HR specialist manages the entire company's onboarding overhead. Because the company grows by 2 to 3 new hires per month, the application assumes that administrative tasks (such as managing profiles or scheduling tracks) must be entirely automated or self-served by the platform to avoid operational bottlenecks.

## 2. About the Data Baseline & Lifecycle
* **Corporate Roster Seeding:** The system operates on the assumption that an initial, flat corporate roster containing 200 active employees is pre-seeded natively in the database. This allows new hires to run dynamic, real-time lookups across the entire corporate structure immediately upon their first login.
* **Onboarding Meeting Track:** The initial onboarding calendar and synchronization tracks are pre-seeded natively within the relational SQLite database. The model assumes a three-tier synchronization matrix mapped automatically on day one:
    1. *Global Company Checkpoints:* All-hands meetings and generic company tours.
    2. *Department-Specific Meetings:* Tailored engineering, marketing, or sales tech-stack deep dives.
    3. *Individual 1-on-1 Mentorship Sessions:* Private placeholder slots reserved strictly for the logged-in user and their assigned mentor.
* **Live Operational Streams:** It is assumed that hybrid schedule configurations, newly exchanged chat payloads, and presence indicators are volatile and highly dynamic. The architecture assumes that any modifications (e.g., swapping remote days) must propagate across connected client nodes instantly through non-blocking, asynchronous gRPC server-to-client streams without relying on manual browser polling or page refreshes.

## 3. About the Execution Context
* **Local Scope Access:** It is assumed that the application is executed and reviewed in a local development environment. Thus, all network handshakes, stream connections, and token verifications are configured to run seamlessly over `localhost` endpoints.
* **Security Context:** Since the platform handles internal communications (live chat) and private employee structures, it is assumed that data access must be guarded by a stateless, cryptographic security filter chain, even within a local testing setup.
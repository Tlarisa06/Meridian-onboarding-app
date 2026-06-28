# Project Assumptions

## About the Users
* **New Employee:** Opens the app on day one with no prior network or company knowledge.
* **HR Manager:** Only 1 person managing onboarding for 2-3 newcomers per month.

## About the Data
* **Source:** Initial corporate roster is pre-seeded based on the 200 existing employees.
* **Meetings Baseline:** The initial onboarding timeline and sync events are pre-seeded natively in the database, automatically aligning global company checkpoints, specific department meetings, and individual 1-on-1 mentorship sessions on day one.
* **Updates:** Hybrid schedules are maintained directly by the employees. Any schedule changes (swaps), newly exchanged chat messages, or updated calendar tracks trigger instant, real-time updates across the app via live gRPC streams without requiring manual page refreshes.

## About the Context
* **Access:** New hires access the application locally on their first working day.
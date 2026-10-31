# SmileCare — Dental Practice Management Website

A responsive front-end prototype for organizing dental clinic patient records, appointments, treatment progress, follow-ups, and staff profile information.

## Run locally
1. Download and extract `SmileCare_Dental_Practice.zip`.
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox).
3. Use the demo sign-in shown on the page:
   - Admin: `admin@smilecare.demo` / `SmileCare123!`
   - Staff: `staff@smilecare.demo` / `SmileCare123!`
4. The role dropdown is a demo role switcher. The prototype does not verify these passwords on a server.

## Included
- Dashboard with summary metrics, upcoming appointments, calendar, activity list, and quick actions
- Patient record create, edit, view, search and filter
- Appointment scheduling, editing, date/status filtering, and status updates
- Treatment progress notes and progress history
- Universal search across patients, appointments, and progress records
- Editable staff profile
- Responsive desktop/tablet/mobile layout
- Required-field, email, phone-pattern, and length validation
- Admin/staff demo role restrictions for patient record creation/editing

## Important production note
This is a browser-only demonstration. It stores changes in page memory and uses a simulated sign-in; it is **not** production-ready and should not be used for real patient information. For real deployment, add a secure backend and database, server-side authentication, role/permission checks on every API, encrypted storage and transport, audit logs, backups, session protection, and compliance with applicable health-data and privacy requirements.

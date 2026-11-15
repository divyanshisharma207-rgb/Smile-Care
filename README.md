# SmileCare — Dental Practice Manager

A clean, modern, multi-page web application for dental practice management, designed for **CSE 326 Web Technology Course Project**.

---

## 📌 Project Features & Highlights
- **100% Pure HTML, CSS & JavaScript**: No frameworks, build steps, or external dependencies required.
- **True Multi-Page Architecture**: Individual HTML pages with standard hyperlinks and browser navigation support.
- **Persistent State Across Pages**: Uses browser `localStorage` to synchronize patient records, appointments, and progress notes seamlessly across all pages.
- **Role-Based Demo Access**: Supports **Administrator** and **Staff** roles with permission checks.
- **Interactive Odontogram / Clinical Progress Tracking**: Timeline and status indicators for dental procedures.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

---

## 🗂️ File Structure

| File | Description |
| :--- | :--- |
| `index.html` | Sign In / Login page (default entry point) |
| `login.html` | Alternative direct link to login page |
| `dashboard.html` | Main practice dashboard with statistics, upcoming appointments, calendar & quick actions |
| `appointments.html` | Appointments management with filters, inline status transitions & scheduling modal |
| `patients.html` | Electronic patient records directory with search and add/edit modals |
| `progress.html` | Clinical treatment progress tracking and history timeline |
| `search.html` | Universal cross-system search across patients, visits, and clinical notes |
| `profile.html` | Practitioner profile settings and department information |
| `settings.html` | Role permissions overview and demo data reset tool |
| `style.css` | Modular stylesheet with CSS variables, responsive breakpoints, and animations |
| `script.js` | Shared data layer (`localStorage`), modal dialog controller, and toast notification engine |

---

## 🔐 Demo Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| **Administrator** | `admin@smilecare.demo` | `SmileCare123!` |
| **Staff Member** | `staff@smilecare.demo` | `SmileCare123!` |

---

## 🚀 How to Run

1. **Direct in Browser**: Double-click `index.html` to open directly in Chrome, Edge, Firefox, or Safari.
2. **VS Code Live Server**: Right-click `index.html` and select **"Open with Live Server"**.

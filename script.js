/* ==========================================================================
   SmileCare - Dental Practice Manager
   Shared JavaScript Utilities & Data Store (script.js)
   Simple, clean, and easy to understand for all pages
   ========================================================================== */

// --- Default Mock Data ---
const DEFAULT_USER = {
  name: "Dr. Johnson",
  email: "admin@smilecare.demo",
  role: "Admin",
  clinic: "SmileCare Dental Clinic",
  bio: "Senior dental surgeon with 12+ years of experience in restorative and cosmetic dentistry."
};

const DEFAULT_PATIENTS = [
  { id: "P-001", name: "Aarav Mehta", email: "aarav@example.com", phone: "+91 98765 01001", lastVisit: "2026-10-20", followup: "2026-11-05", status: "Active", notes: "Routine cleaning completed." },
  { id: "P-002", name: "Diya Sharma", email: "diya@example.com", phone: "+91 98765 01002", lastVisit: "2026-10-18", followup: "2026-11-02", status: "Active", notes: "Root canal treatment plan." },
  { id: "P-003", name: "Rohan Kapoor", email: "rohan@example.com", phone: "+91 98765 01003", lastVisit: "2026-10-15", followup: "2026-10-31", status: "Follow-up", notes: "Check sensitivity after filling." },
  { id: "P-004", name: "Isha Verma", email: "isha@example.com", phone: "+91 98765 01004", lastVisit: "2026-10-14", followup: "2026-11-10", status: "Active", notes: "Braces consultation." },
  { id: "P-005", name: "Kabir Singh", email: "kabir@example.com", phone: "+91 98765 01005", lastVisit: "2026-10-12", followup: "2026-11-12", status: "Active", notes: "Filling completed." }
];

const DEFAULT_APPOINTMENTS = [
  { id: 1, date: "2026-10-31", time: "09:30", patientId: "P-001", treatment: "Cleaning", provider: "Dr. Johnson", status: "Confirmed" },
  { id: 2, date: "2026-10-31", time: "10:30", patientId: "P-002", treatment: "Root Canal", provider: "Dr. Johnson", status: "Confirmed" },
  { id: 3, date: "2026-10-31", time: "12:00", patientId: "P-003", treatment: "Check-up", provider: "Dr. Patel", status: "Pending" },
  { id: 4, date: "2026-10-31", time: "14:00", patientId: "P-004", treatment: "Braces Consultation", provider: "Dr. Johnson", status: "Confirmed" },
  { id: 5, date: "2026-11-01", time: "16:00", patientId: "P-005", treatment: "Filling", provider: "Dr. Patel", status: "Confirmed" }
];

const DEFAULT_PROGRESS = [
  { id: 1, date: "2026-10-29", patientId: "P-001", treatment: "Cleaning", status: "Completed", next: "Routine check in 6 months", by: "Dr. Johnson", note: "Cleaning completed; oral hygiene advice shared." },
  { id: 2, date: "2026-10-29", patientId: "P-002", treatment: "Root canal", status: "In progress", next: "Schedule next treatment session", by: "Dr. Johnson", note: "Initial consultation completed; plan reviewed." },
  { id: 3, date: "2026-10-28", patientId: "P-003", treatment: "Filling follow-up", status: "Needs follow-up", next: "Check sensitivity", by: "Dr. Patel", note: "Follow-up recommended." }
];

const DEFAULT_ACTIVITIES = [
  { title: "New record added for Aarav Mehta", time: "2 hours ago" },
  { title: "Treatment plan updated for Diya Sharma", time: "3 hours ago" },
  { title: "Follow-up scheduled for Rohan Kapoor", time: "5 hours ago" }
];

// --- LocalStorage Data Store Helpers ---
function getStoredData(key, fallback) {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Error parsing " + key, e);
    }
  }
  localStorage.setItem(key, JSON.stringify(fallback));
  return fallback;
}

function setStoredData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Data Getters & Setters
function getCurrentUser() {
  return getStoredData("smilecare_user", DEFAULT_USER);
}

function saveCurrentUser(user) {
  setStoredData("smilecare_user", user);
}

function getPatients() {
  return getStoredData("smilecare_patients", DEFAULT_PATIENTS);
}

function savePatients(list) {
  setStoredData("smilecare_patients", list);
}

function getAppointments() {
  return getStoredData("smilecare_appointments", DEFAULT_APPOINTMENTS);
}

function saveAppointments(list) {
  setStoredData("smilecare_appointments", list);
}

function getProgress() {
  return getStoredData("smilecare_progress", DEFAULT_PROGRESS);
}

function saveProgress(list) {
  setStoredData("smilecare_progress", list);
}

function getActivities() {
  return getStoredData("smilecare_activities", DEFAULT_ACTIVITIES);
}

function saveActivities(list) {
  setStoredData("smilecare_activities", list);
}

function logActivity(title) {
  const list = getActivities();
  list.unshift({ title: title, time: "Just now" });
  saveActivities(list.slice(0, 10));
}

// Reset all demo data back to default
function resetAllData() {
  localStorage.setItem("smilecare_user", JSON.stringify(DEFAULT_USER));
  localStorage.setItem("smilecare_patients", JSON.stringify(DEFAULT_PATIENTS));
  localStorage.setItem("smilecare_appointments", JSON.stringify(DEFAULT_APPOINTMENTS));
  localStorage.setItem("smilecare_progress", JSON.stringify(DEFAULT_PROGRESS));
  localStorage.setItem("smilecare_activities", JSON.stringify(DEFAULT_ACTIVITIES));
}

// --- Helper Functions for Formatting ---
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str).replace(/[&<>"']/g, function(char) {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[char];
  });
}

function formatDate(dateStr) {
  if (!dateStr) return "—";
  const dateObj = new Date(dateStr + "T12:00:00");
  return dateObj.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function formatTime(timeStr) {
  if (!timeStr) return "—";
  const parts = timeStr.split(":");
  const hours = parseInt(parts[0], 10);
  const mins = parts[1] || "00";
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = (hours % 12) || 12;
  return `${formattedHours}:${mins} ${ampm}`;
}

function getStatusClass(status) {
  const map = {
    "Confirmed": "confirmed",
    "Completed": "active-status",
    "Active": "active-status",
    "In progress": "pending",
    "Pending": "pending",
    "Follow-up": "follow-status",
    "Needs follow-up": "follow-status",
    "Cancelled": "cancelled",
    "Inactive": "cancelled"
  };
  return map[status] || "pending";
}

function getPatientById(id) {
  const list = getPatients();
  return list.find(p => p.id === id);
}

function getPatientName(id) {
  const patient = getPatientById(id);
  return patient ? patient.name : "Unknown patient";
}

function getPatientOptions(selectedId = "") {
  const patients = getPatients();
  return patients.map(p => 
    `<option value="${p.id}" ${p.id === selectedId ? "selected" : ""}>${escapeHtml(p.name)} (${p.id})</option>`
  ).join("");
}

// --- Toast Notification ---
function showToast(message) {
  let toastEl = document.getElementById("toast");
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.id = "toast";
    toastEl.className = "toast";
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = message;
  toastEl.style.display = "block";
  setTimeout(() => {
    toastEl.style.display = "none";
  }, 2600);
}

// --- Modal Helper Functions ---
function openModal(title, htmlContent, submitCallback) {
  let backdrop = document.getElementById("modalBackdrop");
  let modalTitle = document.getElementById("modalTitle");
  let modalBody = document.getElementById("modalBody");

  if (!backdrop) return;

  modalTitle.textContent = title;
  modalBody.innerHTML = htmlContent;
  backdrop.style.display = "flex";

  const form = modalBody.querySelector("form");
  if (form && submitCallback) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const formData = new FormData(form);
      submitCallback(formData);
    });
  }
}

function closeModal() {
  const backdrop = document.getElementById("modalBackdrop");
  if (backdrop) {
    backdrop.style.display = "none";
  }
}

// --- Setup Common Header & Navigation on Every Page ---
function setupCommonUI() {
  // 1. Close modal listeners
  const closeBtn = document.getElementById("modalClose");
  const backdrop = document.getElementById("modalBackdrop");
  if (closeBtn) closeBtn.onclick = closeModal;
  if (backdrop) {
    backdrop.addEventListener("click", function(e) {
      if (e.target === backdrop) closeModal();
    });
  }

  // 2. Display logged in user info in topbar
  const currentUser = getCurrentUser();
  const initials = currentUser.name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();

  const topAvatar = document.getElementById("topAvatar");
  const topName = document.getElementById("topName");
  const topRole = document.getElementById("topRole");

  if (topAvatar) topAvatar.textContent = initials || "JD";
  if (topName) topName.textContent = currentUser.name;
  if (topRole) topRole.textContent = currentUser.role;

  // 3. Global search bar redirect to search.html
  const globalSearch = document.getElementById("globalSearch");
  if (globalSearch) {
    globalSearch.addEventListener("keydown", function(e) {
      if (e.key === "Enter" && globalSearch.value.trim()) {
        window.location.href = `search.html?q=${encodeURIComponent(globalSearch.value.trim())}`;
      }
    });
  }

  // 4. Logout button
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.onclick = function(e) {
      e.preventDefault();
      // Keep data but redirect to login page
      window.location.href = "index.html";
    };
  }

  // 5. Today's date pill if present
  const todayDateEl = document.getElementById("todayDate");
  if (todayDateEl) {
    const today = new Date();
    todayDateEl.textContent = today.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  }
}

// Run common UI setup when the page content is loaded
document.addEventListener("DOMContentLoaded", setupCommonUI);

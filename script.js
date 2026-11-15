// login function
function loginUser() {
    var name = document.getElementById("loginName").value;
    var role = document.getElementById("loginRole").value;

    if (name == "") {
        alert("Please enter your name!");
        return;
    }

    localStorage.setItem("savedUser", name);
    localStorage.setItem("savedRole", role);
    showDashboard();
}

// load dashboard data
function showDashboard() {
    var user = localStorage.getItem("savedUser");
    var role = localStorage.getItem("savedRole");

    if (user != null) {
        document.getElementById("welcomeMsg").innerHTML = "Active User: " + user + " (" + role + ")";
    }

    var newName = localStorage.getItem("newPatientName");
    if (newName != null) {
        document.getElementById("totalPatients").innerHTML = "3";
    }
}

// book appointment function
function bookAppointment() {
    var pName = document.getElementById("pName").value;
    var pPhone = document.getElementById("pPhone").value;
    var pTreatment = document.getElementById("pTreatment").value;
    var pDate = document.getElementById("pDate").value;
    var pStatus = document.getElementById("pStatus").value;

    if (pName == "" || pPhone == "" || pDate == "") {
        alert("Please fill all details!");
        return;
    }

    localStorage.setItem("newPatientName", pName);
    localStorage.setItem("newPatientPhone", pPhone);
    localStorage.setItem("newPatientTreatment", pTreatment);
    localStorage.setItem("newPatientDate", pDate);
    localStorage.setItem("newPatientStatus", pStatus);

    alert("Appointment Booked Successfully!");
    window.location.href = "patients.html";
}

// load patients table
function showPatients() {
    var newName = localStorage.getItem("newPatientName");

    if (newName != null) {
        var phone = localStorage.getItem("newPatientPhone");
        var treatment = localStorage.getItem("newPatientTreatment");
        var date = localStorage.getItem("newPatientDate");
        var status = localStorage.getItem("newPatientStatus");

        var table = document.getElementById("patientTable");
        var newRow = "<tr>" +
                     "<td>" + newName + "</td>" +
                     "<td>" + phone + "</td>" +
                     "<td>" + treatment + "</td>" +
                     "<td>" + date + "</td>" +
                     "<td>" + status + "</td>" +
                     "<td><button onclick='updateStatus(this)' class='btn'>Update</button> <button onclick='deleteRow(this)' class='btn-red'>Delete</button></td>" +
                     "</tr>";

        table.innerHTML = table.innerHTML + newRow;
    }

    var role = localStorage.getItem("savedRole");
    if (role == "Patient") {
        document.getElementById("roleNotice").innerHTML = "Logged in as Patient (View Only Mode)";
    }
}

// update status button
function updateStatus(btn) {
    var role = localStorage.getItem("savedRole");
    if (role == "Patient") {
        alert("Only Staff/Admin can update status!");
        return;
    }

    var row = btn.parentNode.parentNode;
    var statusCell = row.cells[4];

    if (statusCell.innerHTML == "Scheduled") {
        statusCell.innerHTML = "In Progress";
    } else if (statusCell.innerHTML == "In Progress") {
        statusCell.innerHTML = "Completed";
    } else {
        statusCell.innerHTML = "Scheduled";
    }
}

// delete row button
function deleteRow(btn) {
    var role = localStorage.getItem("savedRole");
    if (role == "Patient") {
        alert("Only Staff/Admin can delete records!");
        return;
    }

    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// search patient by name
function searchPatient() {
    var input = document.getElementById("searchBox").value.toLowerCase();
    var table = document.getElementById("patientTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var nameText = rows[i].cells[0].innerHTML.toLowerCase();
        if (nameText.includes(input)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

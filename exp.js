let editingRow = null;
document.addEventListener("DOMContentLoaded", loadTableData);

function dataEnter() {
    document.getElementById("dataEntry").style.display = "block";
}

function closeData() {
    document.getElementById("dataEntry").style.display = "none";
}

function enter() {
    const fName = document.getElementById("fName").value.trim();
    const sName = document.getElementById("secondName").value.trim();
    const rollNo = document.getElementById("rollNo").value.trim();
    const marks = document.getElementById("marks").value.trim();

     if (!fName && !sName && !rollNo && !marks) {
        alert("Please enter at least one detail!");
        return;
    }

    const tableBody = document.querySelector("#table tbody");
    const newRow = document.createElement("tr");

    function createRow(value) {
        const td = document.createElement("td");
        const p = document.createElement("p");
        p.textContent = value || "";  
        td.appendChild(p);
        return td;
    }

    newRow.appendChild(createRow(fName));
    newRow.appendChild(createRow(sName));
    newRow.appendChild(createRow(rollNo));
    newRow.appendChild(createRow(marks));

    // Create action buttons
    const actionTd = document.createElement("td");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

     editButton.textContent = "Edit";
    editButton.style.backgroundColor = "blue";
    editButton.style.color = "white";
    editButton.style.marginRight = "8px";
    editButton.style.padding = "5px";
    editButton.style.borderRadius = "6px";
    editButton.style.border = "6px";

    editButton.className = "editBtn";
    editButton.onclick = function () {
        openEditModal(newRow);
    };

    // Keep original delete button styles and functionality
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteBtn";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.padding = "5px";
    deleteButton.style.borderRadius = "6px";
    deleteButton.style.border = "6px";
    deleteButton.style.color = "white";
    deleteButton.onclick = function () {
        document.getElementById("delete").style.display = "block";
        document.getElementById("yes").onclick = function () {
            tableBody.removeChild(newRow);
            saveData();  
            no();
        };
    };

    actionTd.appendChild(editButton);
    actionTd.appendChild(deleteButton);
    newRow.appendChild(actionTd);
    tableBody.appendChild(newRow);

    saveData();  

    // Clear input fields
    document.getElementById("fName").value = "";
    document.getElementById("secondName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("marks").value = "";
}

//  Save Data to Local Storage
function saveData() {
    const rows = document.querySelectorAll("#table tbody tr");
    let data = [];

    rows.forEach(row => {
        const cells = row.querySelectorAll("td p");
        data.push({
            fName: cells[0].textContent,
            sName: cells[1].textContent,
            rollNo: cells[2].textContent,
            marks: cells[3].textContent
        });
    });

    localStorage.setItem("tableData", JSON.stringify(data));
}

// Load Data from Local Storage
function loadTableData() {
    const tableBody = document.querySelector("#table tbody");
    const data = JSON.parse(localStorage.getItem("tableData")) || [];

    data.forEach(entry => {
        const newRow = document.createElement("tr");

        function createRow(value) {
            const td = document.createElement("td");
            const p = document.createElement("p");
            p.textContent = value || ""; 
            td.appendChild(p);
            return td;
        }

        newRow.appendChild(createRow(entry.fName));
        newRow.appendChild(createRow(entry.sName));
        newRow.appendChild(createRow(entry.rollNo));
        newRow.appendChild(createRow(entry.marks));

         
        const actionTd = document.createElement("td");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        editButton.textContent = "Edit";
        editButton.style.backgroundColor = "blue";
        editButton.style.color = "white";
        editButton.style.marginRight = "8px";
        editButton.style.padding = "5px";
        editButton.style.borderRadius = "6px";
        editButton.style.border = "6px";

        editButton.className = "editBtn";
        editButton.onclick = function () {
            openEditModal(newRow);
        };

        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteBtn";
        deleteButton.style.backgroundColor = "red";
        deleteButton.style.padding = "5px";
        deleteButton.style.borderRadius = "6px";
        deleteButton.style.border = "6px";
        deleteButton.style.color = "white";
        deleteButton.onclick = function () {
            document.getElementById("delete").style.display = "block";
            document.getElementById("yes").onclick = function () {
                tableBody.removeChild(newRow);
                saveToLocalStorage();
                no();
            };
        };

        actionTd.appendChild(editButton);
        actionTd.appendChild(deleteButton);
        newRow.appendChild(actionTd);
        tableBody.appendChild(newRow);
    });
}

// Open Edit Modal
function openEditModal(row) {
    editingRow = row;
    const data = row.querySelectorAll("td p");

    document.getElementById("editFirstName").value = data[0].textContent;
    document.getElementById("editSecondName").value = data[1].textContent;
    document.getElementById("editRollNo").value = data[2].textContent;
    document.getElementById("editMarks").value = data[3].textContent;

    document.getElementById("popup").style.display = "block";
}

// Save  function
function saveEdit() {
    if (!editingRow) return;

    const data = editingRow.querySelectorAll("td p");

    data[0].textContent = document.getElementById("editFirstName").value;
    data[1].textContent = document.getElementById("editSecondName").value;
    data[2].textContent = document.getElementById("editRollNo").value;
    data[3].textContent = document.getElementById("editMarks").value;

    saveData();  
    closeModal();
}

// Close Modal
function closeModal() {
    document.getElementById("popup").style.display = "none";
}

function no() {
    document.getElementById("delete").style.display = "none";
}

let editingRow = null;

function enter() {
    const fName = document.getElementById("fName").value.trim();
    const sName = document.getElementById("secondName").value.trim();
    const rollNo = document.getElementById("rollNo").value.trim();
    const marks = document.getElementById("marks").value.trim();

    const tableBody = document.querySelector("#table tbody");
    const newRow = document.createElement("tr");

    function createCell(value) {
        const td = document.createElement("td");
        const p = document.createElement("p");
        p.textContent = value || ""; // If input is empty, set blank
        td.appendChild(p);
        return td;
    }

    newRow.appendChild(createCell(fName));
    newRow.appendChild(createCell(sName));
    newRow.appendChild(createCell(rollNo));
    newRow.appendChild(createCell(marks));

    // Create action buttons
    const actionTd = document.createElement("td");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // Edit Button
    editButton.textContent = "Edit";
    editButton.className = "editBtn";
    editButton.onclick = function () {
        openEditModal(newRow);
    };

    // Delete Button
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteBtn";
    deleteButton.onclick = function () {
        tableBody.removeChild(newRow);
    };

    actionTd.appendChild(editButton);
    actionTd.appendChild(deleteButton);
    newRow.appendChild(actionTd);

    // Append row to table
    tableBody.appendChild(newRow);

    // Clear input fields
    document.getElementById("fName").value = "";
    document.getElementById("secondName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("marks").value = "";
}

// Open Edit Modal
function openEditModal(row) {
    editingRow = row;
    const cells = row.querySelectorAll("td p");

    document.getElementById("editFirstName").value = cells[0].textContent;
    document.getElementById("editSecondName").value = cells[1].textContent;
    document.getElementById("editRollNo").value = cells[2].textContent;
    document.getElementById("editMarks").value = cells[3].textContent;

    document.getElementById("popup").style.display = "block";
}

// Save Edited Changes
function saveEdit() {
    if (!editingRow) return;

    const cells = editingRow.querySelectorAll("td p");

    cells[0].textContent = document.getElementById("editFirstName").value;
    cells[1].textContent = document.getElementById("editSecondName").value;
    cells[2].textContent = document.getElementById("editRollNo").value;
    cells[3].textContent = document.getElementById("editMarks").value;

    closeModal();
}

// Close Modal
function closeModal() {
    document.getElementById("popup").style.display = "none";
}

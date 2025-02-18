let editingRow = null;

function dataEnter() {
    const dataEntry = document.getElementById("dataEntry");
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
/* 
newRow.appendChild(createCell(fName));
fname = tarun;
sName = k;
<td>
<p>tarun</p>
</td>
*/

    // Create action buttons
    const actionTd = document.createElement("td");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // Edit Button
    // const p = document.createElement("p");
    // p.textContent = "Edit";

    // editButton.textContent = "Edit";
    editButton.innerHTML = "<p>hi</p>";
    editButton.className = "editBtn";
    editButton.onclick = function () {
        openEditModal(newRow);
    };

    // Delete Button
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteBtn";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.onclick = function () {
         
        confirm("would like to delete")
        tableBody.removeChild(newRow);
        
        

    };




    // deleteButton.onclick = function () {
    //     tableBody.removeChild(newRow);
    // };

    actionTd.appendChild(editButton);
    actionTd.appendChild(deleteButton);
    newRow.appendChild(actionTd);
    // adding p in edit
    // editButton.appendChild(p);

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

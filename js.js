const addBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const input2 = document.getElementById("todo-in");

const todos = [];

addBtn.addEventListener("click", () => {
    todos.push(input.value);
    todos.push(input2.value);
    appendToList("todo-list", input.value);
    appendToList("todo-list", input2.value);
    input.value = "";
    input2.value = "";
});

// naive approach
function makeTodoList() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < todos.length; i++) {
    const p = document.createElement("p");
    p.textContent = todos[i] + " " + "Default value";
    fragment.appendChild(p);
  }

  todoList.appendChild(fragment);
}

// better approach
const appendToList = (id, value) => {
  const todoList = document.getElementById(id);
  const p = document.createElement("p");
  p.textContent = value;
  todoList.appendChild(p);
};



const existingRow = document.getElementById("myRow"); // Select the existing <tr>
const newTd = document.createElement("td"); // Create a new table cell
const p = document.createElement("p"); // Create a new paragraph

p.textContent = todos[i] + " Default value"; // Set text content
newTd.appendChild(p); // Append the paragraph inside the new <td>
existingRow.appendChild(newTd); // Append the new <td> to the existing <tr>

// Get the CSS of the table row
const rowStyles = window.getComputedStyle(existingRow);
console.log(rowStyles.backgroundColor);
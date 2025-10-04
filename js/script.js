const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoDate = document.getElementById("todo-date");
const todoList = document.getElementById("todo-list");
const filterBtn = document.getElementById("filter-btn");
const filterDate = document.getElementById("filter-date");
const deleteAllBtn = document.getElementById("delete-all");

let todos = [];

// Add todo (with validation)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  const date = todoDate.value;

  // Validation
  if (text === "") {
    alert("⚠️ Please fill a todo!");
    return;
  }
  if (date === "") {
    alert("⚠️ Please select a due date!");
    return;
  }
});

// Add todo
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  const date = todoDate.value;

  if (text) {
    todos.push({
      id: Date.now(),
      text,
      date,
      status: "Pending"
    });
    renderTodos(todos);
    form.reset();
  }
});

// Render todos
function renderTodos(list) {
  todoList.innerHTML = "";
  if (list.length === 0) {
    todoList.innerHTML = `<tr><td colspan="4" class="no-todos">No todos yet. Add one above!</td></tr>`;
    return;
  }

  list.forEach(todo => {
    const row = document.createElement("tr");

    // Todo actions
    row.innerHTML = `
      <td>${todo.text}</td>
      <td>${todo.date || "-"}</td>
      <td>${todo.status}</td>
      <td class="todo-actions">
        <button class="done">Done</button>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </td>
    `;

    //event Done
    row.querySelector(".done").addEventListener("click", () => {
      todo.status = "Done";
      renderTodos(todos);
    });

    //event Edit
    row.querySelector(".edit").addEventListener("click", () => {
      const newText = prompt("Edit task:", todo.text);
      if (newText) {
        todo.text = newText;
        renderTodos(todos);
      }
    });

    //event Delete
    row.querySelector(".delete").addEventListener("click", () => {
      todos = todos.filter(t => t.id !== todo.id);
      renderTodos(todos);
    });

    todoList.appendChild(row);
  });
}

// Filter by date (via button)
filterBtn.addEventListener("click", () => {
  filterDate.style.display = filterDate.style.display === "none" ? "block" : "none";
  filterDate.value = "";
});

// Result filter select date
filterDate.addEventListener("change", () => {
  const value = filterDate.value;
  if (value) {
    const filtered = todos.filter(todo => todo.date === value);
    renderTodos(filtered);
  } else {
    renderTodos(todos);
  }
});

// Delete all
deleteAllBtn.addEventListener("click", () => {
  if (confirm("Delete all tasks?")) {
    todos = [];
    renderTodos(todos);
  }
});

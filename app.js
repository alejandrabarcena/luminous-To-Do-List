const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-task");
const clearBtn = document.getElementById("clear-completed");
const pendingCount = document.getElementById("pending-count");
let selectedCategory = null;

// Inicialización
window.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  updateStats();
});

// Delegación para categorías y botones
document.body.addEventListener("click", (e) => {
  if (e.target.closest(".category")) selectCategory(e.target.closest(".category"));
  if (e.target.id === "add-task") handleAdd();
  if (e.target.id === "clear-completed") clearCompleted();
  if (e.target.classList.contains("complete-btn")) toggleComplete(e.target.closest(".todo-item"));
  if (e.target.classList.contains("delete-btn")) removeTask(e.target.closest(".todo-item"));
});

// Seleccionar categoría
function selectCategory(cat) {
  document.querySelectorAll(".category").forEach(c => c.classList.remove("selected"));
  cat.classList.add("selected");
  selectedCategory = {
    id: cat.dataset.id,
    imageSrc: cat.querySelector("img").src,
    name: cat.querySelector("span").innerText
  };
}

// Añadir tarea
function handleAdd() {
  const desc = document.getElementById("task-desc").value.trim();
  const date = document.getElementById("task-date").value;
  if (!selectedCategory || !date) return alert("Selecciona categoría y fecha");
  addTask(selectedCategory, desc, date, false);
  resetForm();
  saveTasks();
  updateStats();
}

// Crear elemento de tarea
function addTask(cat, desc, date, done) {
  const li = document.createElement("li");
  li.className = "todo-item";
  if (done) li.classList.add("completed");
  li.innerHTML = `
    <img src="${cat.imageSrc}" alt="${cat.name}">
    <div class="todo-text">
      <strong>${cat.name}</strong>
      <span>${desc || "Sin descripción"}</span>
      <small>Due: ${date}</small>
    </div>
    <div class="todo-actions">
      <button class="complete-btn">${done ? "↺" : "✔️"}</button>
      <button class="delete-btn">🗑️</button>
    </div>`;
  todoList.append(li);
  requestAnimationFrame(() => li.classList.add("visible"));
}

// Marcar completada
function toggleComplete(li) {
  li.classList.toggle("completed");
  saveTasks();
  updateStats();
}

// Eliminar
function removeTask(li) {
  li.remove();
  saveTasks();
  updateStats();
}

// Guardar y cargar desde LocalStorage
function saveTasks() {
  const tasks = [...todoList.children].map(li => {
    return {
      category: {
        id: li.dataset.categoryId,
        imageSrc: li.querySelector("img").src,
        name: li.querySelector("strong").innerText
      },
      desc: li.querySelector(".todo-text span").innerText,
      date: li.querySelector(".todo-text small").innerText.replace("Due: ",""),
      completed: li.classList.contains("completed")
    };
  });
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function loadTasks() {
  const data = JSON.parse(localStorage.getItem("todoTasks")) || [];
  if (data.length === 0) {
    addTask({ id:1, imageSrc:"https://iili.io/dL9hYsj.png", name:"Sport" }, 
            "Soccer practice", new Date().toISOString().split("T")[0], false);
  } else {
    data.forEach(t => addTask(t.category, t.desc, t.date, t.completed));
  }
}

// Limpiar completadas
function clearCompleted() {
  document.querySelectorAll(".todo-item.completed").forEach(li => li.remove());
  saveTasks();
  updateStats();
}

// Actualizar contador
function updateStats() {
  const total = todoList.children.length;
  const done = todoList.querySelectorAll(".completed").length;
  pendingCount.innerText = `${total - done} pendientes`;
}

// Reset formulario
function resetForm() {
  document.getElementById("task-desc").value = "";
  document.getElementById("task-date").value = "";
  document.querySelectorAll(".category").forEach(c => c.classList.remove("selected"));
  selectedCategory = null;
}

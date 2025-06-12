@'
const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-task");
const clearBtn = document.getElementById("clear-completed");
const pendingCount = document.getElementById("pending-count");
let selectedCategory = null;

window.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".category").forEach(el=>{
    el.addEventListener("click",()=>{ 
      document.querySelectorAll(".category").forEach(c=>c.classList.remove("selected"));
      el.classList.add("selected");
      selectedCategory={id:el.dataset.id,imageSrc:el.querySelector("img").src,name:el.querySelector("span").innerText};
    });
  });
  addBtn.addEventListener("click", addTaskHandler);
  clearBtn.addEventListener("click", clearCompleted);
  loadTasks();
  updateStats();
});

function addTaskHandler(){
  const desc=document.getElementById("task-desc").value.trim();
  const date=document.getElementById("task-date").value;
  if(!selectedCategory||!date)return alert("Falta categoría o fecha");
  addTask(selectedCategory,desc,date,false);
  resetForm();
  saveTasks();
  updateStats();
}

function addTask(cat,desc,date,done){
  const li=document.createElement("li");
  li.className="todo-item";
  if(done)li.classList.add("completed");
  li.dataset.categoryId=cat.id;
  li.innerHTML=`
    <img src="${cat.imageSrc}" alt="${cat.name}">
    <div><strong>${cat.name}</strong> <span>${desc||"Sin descripción"}</span><br><small>Due: ${date}</small></div>
    <div class="todo-actions">
      <button class="complete-btn">${done?"Undo":"Complete"}</button>
      <button class="delete-btn">Delete</button>
    </div>`;
  requestAnimationFrame(()=>li.classList.add("visible"));
  li.querySelector(".complete-btn").onclick=()=>{li.classList.toggle("completed"); saveTasks(); updateStats();};
  li.querySelector(".delete-btn").onclick=()=>{li.remove(); saveTasks(); updateStats();};
  todoList.appendChild(li);
}

function saveTasks(){
  const arr=[...document.querySelectorAll(".todo-item")].map(li=>({
    category:{id:li.dataset.categoryId,imageSrc:li.querySelector("img").src,name:li.querySelector("strong").innerText},
    taskDesc:li.querySelector("span").innerText,
    taskDate:li.querySelector("small").innerText.replace("Due: ",""),
    isCompleted:li.classList.contains("completed")
  }));
  localStorage.setItem("todoTasks",JSON.stringify(arr));
}

function loadTasks(){
  const arr=JSON.parse(localStorage.getItem("todoTasks"))||[];
  if(!arr.length)addTask({id:1,imageSrc:"https://iili.io/dL9hYsj.png",name:"Sport"},"Soccer practice",new Date().toISOString().split("T")[0],false);
  else arr.forEach(t=>addTask(t.category,t.taskDesc,t.taskDate,t.isCompleted));
}

function clearCompleted(){
  document.querySelectorAll(".todo-item.completed").forEach(el=>el.remove());
  saveTasks(); updateStats();
}

function updateStats(){
  const total=document.querySelectorAll(".todo-item").length;
  const done=document.querySelectorAll(".todo-item.completed").length;
  pendingCount.textContent=`${total-done} pendientes`;
}

function resetForm(){
  document.getElementById("task-desc").value="";
  document.getElementById("task-date").value="";
  document.querySelectorAll(".category").forEach(c=>c.classList.remove("selected"));
  selectedCategory=null;
}
'@ | Set-Content -Encoding UTF8 app.js

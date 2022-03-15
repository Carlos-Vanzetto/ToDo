import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcons.js";
const btn = document.querySelector("[data-form-btn]");
const createTask = e => {
  e.preventDefault();
  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const taskContent = document.createElement("div");
  const task = document.createElement("li");
  task.classList.add("card");
  const taskTitle = document.createElement("span");
  taskTitle.classList.add("task");
  taskTitle.innerText= value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(taskTitle);
  //taskContent.appendChild(deleteIcon());
  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  lista.appendChild(task);
  input.value = "";
 
}

btn.addEventListener("click", createTask);

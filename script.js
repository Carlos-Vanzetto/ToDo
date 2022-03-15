(()=> {
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
  task.appendChild(taskContent);
  lista.appendChild(task);
  input.value = "";
  const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
}

btn.addEventListener("click", createTask);

const checkComplete = ()=>{
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask);
  return i;
}

const completeTask = (e)=>{
  const element = e.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon")
  element.classList.toggle("far");
}
})();
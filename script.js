const btn = document.querySelector("[data-form-btn]");
const createTask = e => {
  e.preventDefault();
  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const task = document.createElement("li");
  task.classList.add("card");
  const content = `<div>
  <i class="far fa-check-square icon"></i>
  <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  task.innerHTML = content;
  lista.appendChild(task);
  input.value = "";
  

}

btn.addEventListener("click", createTask);
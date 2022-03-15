const btn = document.querySelector("[data-form-btn]");
const createTask = e=>{
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  let nuevaTarea = input.value;
  console.log(nuevaTarea);
  }
  
btn.addEventListener("click", createTask);
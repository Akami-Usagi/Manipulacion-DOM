const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const inputText = document.querySelector("[data-form-input__text]");
    const value = inputText.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card")
    inputText.value = "";
    //backticks alt+96 
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-edit editIcon icon"></i>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  task.innerHTML = content;
  list.appendChild(task)
    console.log(content);
}


//arrow function o funciones anonimas =>
btn.addEventListener("click", createTask)
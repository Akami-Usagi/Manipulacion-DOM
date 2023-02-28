import checkComplete from "./Modulos/checkComplete.js";
import deleteIcon from "./Modulos/deleteIcon.js";

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
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    
  //task.innerHTML = content;
  task.appendChild(taskContent);
  list.appendChild(task)
  task.appendChild(deleteIcon())
    
};

// insertBefore(padre, hijo)
//replaceChild(element 1, element 2)
//removeChild(elemento)
//arrow function o funciones anonimas =>
btn.addEventListener("click", createTask)


// Inmediately invoked function expression IIFE 

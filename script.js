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
    const taskIcon1 = document.createElement("i")
    taskIcon1.appendChild(editComplete());
    taskContent.appendChild(taskIcon1);
    const taskIcon2 = document.createElement("i");
    taskIcon2.appendChild(deleteComplete());
    taskContent.appendChild(taskIcon2);
    

    
  //task.innerHTML = content;
  task.appendChild(taskContent);
  list.appendChild(task)
    
}

// insertBefore(padre, hijo)
//replaceChild(element 1, element 2)
//removeChild(elemento)
//arrow function o funciones anonimas =>
btn.addEventListener("click", createTask)

const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far");
  i.classList.add("fa-check-square");
  i.classList.add("icon");

  return i;
}

const editComplete = () => {
  const i = document.createElement("i");
  i.classList.add("fas");
  i.classList.add("fa-edit");
  i.classList.add("editIcon");
  i.classList.add("icon");

  return i;
}

const deleteComplete = () => {
  const i = document.createElement("i");
  i.classList.add("fas");
  i.classList.add("fa-trash-alt");
  i.classList.add("trashIcon");
  i.classList.add("con");
  

  return i;
}
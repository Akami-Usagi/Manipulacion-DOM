const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const inputText = document.querySelector("[data-form-input__text]");
    console.log(inputText.value);
}


//arrow function o funciones anonimas =>
btn.addEventListener("click", createTask)
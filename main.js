const form = document.querySelector("#form");
const input = document.querySelector("#task_input");
const task_list = document.querySelector("#tasks");
const status = document.querySelector("#status");

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    const task = input.value;
    
    if (!task) {
        alert("write something");

        return;
    }
    
    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const content_element = document.createElement("div");
    content_element.classList.add("content");

    task_element.appendChild(content_element);

    const input_element = document.createElement("input");
    input_element.type = "text";
    input_element.value = task;
    input_element.setAttribute('readonly' , 'readonly');

    content_element.appendChild(input_element);

    const action = document.createElement("div");
    action.classList.add("action")

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    action.appendChild(checkbox);
    task_element.appendChild(action);

    task_list.appendChild(task_element);

    input.value = ""
    
    
})
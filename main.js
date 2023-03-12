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

    const input_element = document.createElement("span");
    input_element.type = "text";
    input_element.innerHTML = task;
    
    input_element.setAttribute('readonly' , 'readonly');

    content_element.appendChild(input_element);

    const action = document.createElement("div");
    action.classList.add("action")

    const check = document.createElement("input");
    check.classList.add = "checkbox_check"
    check.type = "checkbox";

    action.appendChild(check);
    task_element.appendChild(action);

    task_list.appendChild(task_element);

    input.value = ""

    check.addEventListener('click', () => {

        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        var values = []

        checkboxes.forEach((checkbox)  => {
        values.push(checkbox.value);
        })

        if (values.length >= 1 ) {

            status.style.display = "block";

        } else {
            status.style.display = "none";
        }
        
        status.selectedIndex = 0;

        status.addEventListener('change' , function() {
            
            var value = status.value;
            
            
            
            if (value == "1") {
                task_element.remove();
                status.style.display = "none";
                
                

            } else if (value == "2") {
                
                input_element.style.textDecoration = "line-through";
                var clist = document.getElementsByTagName("input");
                for (var i = 0; i < clist.length; ++i) {
                     clist[i].checked = false;
                 }
                status.style.display = "none";

            }
            
            
            

        }, false)
    })
    

    

    

})
let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");
let error = document.getElementById("error");

function addTask(){
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        error.innerText = "Task cannot be empty!";
        return;
    }

    error.innerText = "";

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = taskText;

    let actions = document.createElement("div");
    actions.className = "actions";

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = function(){
        editTask(span);
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function(){
        li.remove();
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(taskSpan){
    let newTask = prompt("Edit task:", taskSpan.innerText);

    if(newTask === null) return;

    if(newTask.trim() === ""){
        alert("Task cannot be empty!");
        return;
    }

    taskSpan.innerText = newTask;
}
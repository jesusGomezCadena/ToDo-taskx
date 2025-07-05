const inputBox = document.getElementById("tarea");
const listTasks = document.getElementById("list-tasks");


function addTask(){
    if(inputBox.value ===""){
        alert("Escribe una tarea antes de intentar agregar algo!");
        return
    }

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listTasks.appendChild(li)
    inputBox.value = ""
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    saveData();
    
}

inputBox.addEventListener("keypress", (e)=>{
 if(e.key == "Enter") addTask();   
})

listTasks.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData(){
    localStorage.setItem("data", listTasks.innerHTML);
}

function showTaks(){
    listTasks.innerHTML = localStorage.getItem("data")
}

showTaks();
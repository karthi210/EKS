const API="http://backend:5000/tasks"

async function addTask(){

let task=document.getElementById("task").value

await fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({task})
})

loadTasks()
}

async function loadTasks(){

let res=await fetch(API)

let data=await res.json()

let list=document.getElementById("list")

list.innerHTML=""

data.forEach(t=>{
let li=document.createElement("li")
li.innerText=t.task
list.appendChild(li)
})

}

loadTasks()
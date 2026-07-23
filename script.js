function addTask(){

let input=document.getElementById("taskInput");

let task=input.value.trim();

if(task===""){
alert("Please enter a task!");
return;
}

let li=document.createElement("li");

li.innerHTML=task+" <span class='delete'>🗑️</span>";

li.querySelector(".delete").onclick=function(){
li.remove();
}

document.getElementById("taskList").appendChild(li);

input.value="";
}

let tasksList = document.querySelector("#tasks-list");
let addButton = document.querySelector("#add");
let textInput = document.querySelector("#input-task");
let totalTasks = document.querySelector("#total-Tasks");
let deleteAll = document.querySelector("#delete-all");

getData();

//add new task
addButton.addEventListener("click", addNewTask);
textInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    addNewTask();
  }
});
function addNewTask() {
  if (textInput.value == "") return;
  tasksList.innerHTML += `<div class="task">
    <div class="content">
      <i id="press" class="fa-regular fa-square"></i>
      <i id="press" class="fa-solid fa-square-check"></i>
      <p id="press" class="text">${textInput.value}</p>
    </div>
    <i id="delete" class="fa-solid fa-trash-can" title="Delete"></i>
  </div>`;
  textInput.value = "";
  saveData();
  totalTask();
}

//delete task and marked as done
tasksList.addEventListener(
  "click",
  function (e) {
    console.log(
      e.target.id + " " + e.target.tagName + " " + e.target.className
    );
    if (e.target.title === "Delete") {
      e.target.parentElement.remove();
      saveData();
      totalTask();
    } else if (e.target.id === "press") {
      e.target.parentElement.parentElement.classList.toggle("done");
      saveData();
    }
  },
  false
);

//delete all tasks
deleteAll.addEventListener("click", function (e) {
  tasksList.innerHTML = "";
  deleteData();
  totalTask();
});

//save data to local storage
function saveData() {
  localStorage.setItem("tasks", tasksList.innerHTML);
}
//get data from local storage
function getData() {
  tasksList.innerHTML = localStorage.getItem("tasks");
  totalTask();
}
//get data from local storage
function deleteData() {
  localStorage.setItem("tasks", "");
}

function totalTask() {
  let numberOfTasks = document.querySelectorAll(".task").length;
  totalTasks.innerHTML = `Total Tasks: ${numberOfTasks}`;
}

let listDisplay = document.getElementById("listDisplay");
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let deleteBtn = document.getElementById("deleteBtn");

lists = [];

addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearTask);

loadTasks();

function addTask() {
  let item = taskInput.value;

  if (item === "") {
    return;
  }

  lists.push(item);
  displayTask();
  item = "";
  saveTask();
}

function displayTask() {
  let html = "";
  for (let i = 0; i < lists.length; i++) {
    html += `<li> ${lists[i]} <button onclick="deleteTask(${i})">Delete</button> </li></ul>`;
  }

  listDisplay.innerHTML = html;
}

function deleteTask(index) {
  lists.splice(index, 1);
  displayTask();
}

function clearTask() {
  lists = [];
  displayTask();
}

function saveTask() {
  let listsItems = JSON.stringify(lists);
  localStorage.setItem("lists", listsItems);
}

function loadTasks() {
  let listItems = localStorage.getItem("lists");
  listsItems = JSON.parse(listItems);
  lists = listsItems;
  displayTask();
}

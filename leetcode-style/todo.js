let taskBtn = document.getElementById("taskBtn");
let taskInput = document.getElementById("taskInput");
let display = document.getElementById("display");

let tasks = [];

taskBtn.addEventListener("click", function () {
  // console.log(event.target.value);
  // let taskItem = "";

  // taskBtn.addEventListener("click", addTaskToArray(taskItem));
  // display.innerHTML = tasks.join("<br>");

  let taskItem = taskInput.value;
  addTaskToArray(taskItem);
  renderTask(tasks);
  attachTaskEvents();
});

function addTaskToArray(taskItem) {
  if (taskItem !== "" && taskItem !== null) {
    tasks.push({
      text: taskItem,
      completed: false,
    });
    taskInput.value = "";
  }
}

function renderTask(tasks) {
  let output = "";

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      output += "<p class='tasksOutput line-through'>" + tasks[i].text + "</p>";
    } else {
      output += "<p class='tasksOutput'>" + tasks[i].text + "</p>";
    }
  }

  display.innerHTML = output;
}

function attachTaskEvents() {
  let outputs = document.getElementsByClassName("tasksOutput");

  for (let i = 0; i < outputs.length; i++) {
    outputs[i].addEventListener("click", function () {
      tasks[i].completed = !tasks[i].completed;
      renderTask(tasks);
    });
  }
}

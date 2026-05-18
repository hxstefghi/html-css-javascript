let display = document.getElementById("display");
let count = 0;

document
  .getElementById("increaseBtn")
  .addEventListener("click", increaseCounter);
document
  .getElementById("decreaseBtn")
  .addEventListener("click", decreaseCounter);
document.getElementById("resetBtn").addEventListener("click", resetCounter);
document.getElementById("saveBtn").addEventListener("click", save);
document.getElementById("loadBtn").addEventListener("click", load);

// this is the display for the display counter
display.style.fontWeight = "bold";
display.style.fontSize = "2rem";

load();

function increaseCounter() {
  count++;
  display.innerHTML = count;
}

function decreaseCounter() {
  count--;
  display.innerHTML = count;
}

function resetCounter() {
  count = 0;
  display.innerHTML = count;
}

function save() {
  localStorage.setItem("count", count);
}

function load() {
  count = localStorage.getItem("count");
  display.innerHTML = count;
}

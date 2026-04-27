let addBtn = document.getElementById("addBtn");
let subtractBtn = document.getElementById("subtractBtn");
let resetBtn = document.getElementById("resetBtn");

let counter = 0;
let displayCounter = document.getElementById("displayCounter");

function add() {
  counter++;
  displayCounter.innerHTML = counter;
}

function subtract() {
  counter--;
  displayCounter.innerHTML = counter;
}

function reset() {
  counter = 0;
  displayCounter.innerHTML = counter;
}

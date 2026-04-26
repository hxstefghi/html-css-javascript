let date = document.getElementById("date-btn");

date.addEventListener("click", () => {
  let display = document.getElementById("display");

  display.innerHTML = Date();
  display.style.color = "blue";
  display.style.fontSize = "2rem";
});

let box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.innerHTML = "Mouse is over me!";
});

box.addEventListener("mouseout", () => {
  box.innerHTML = "Mouse is out!";
});

let pos = document.getElementById("pos");

addEventListener("mousemove", (event) => {
  pos.innerHTML = "X: " + event.clientX + " Y: " + event.clientY;
});

let keyDown = document.getElementById("keyDown");
let keyDownDisplay = document.getElementById("keyDownDisplay");

keyDown.addEventListener("keydown", (event) => {
  keyDownDisplay.innerHTML = "You pressed: " + event.key;
});

let enterKey = document.getElementById("enterKey");

enterKey.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    document.getElementById("enterDisplay").innerHTML =
      "You pressed the Enter key!";
  }
});

let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");
let btnReset = document.getElementById("btnReset");

let count = 0;
let myInterval;

btnStart.addEventListener("click", () => {
  myInterval = setInterval(counter, 1000);
});

btnStop.addEventListener("click", () => {
  clearInterval(myInterval);
});

btnReset.addEventListener("click", () => {
  count = 0;
  document.getElementById("counterDisplay").innerHTML = "0";
});

function counter() {
  count++;
  document.getElementById("counterDisplay").innerHTML = count;
}

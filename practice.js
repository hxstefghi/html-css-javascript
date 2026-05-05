import { Person } from "./js/person.js";

let display = document.getElementById("display");
let dateBtn = document.getElementById("dateBtn");
let showDate = document.getElementById("showDate");

// style button for dateBtn
dateBtn.style.backgroundColor = "black";
dateBtn.style.padding = "20px";
dateBtn.style.color = "white";
dateBtn.style.cursor = "pointer";
// dateBtn.style.fontWeight = "bold";
dateBtn.style.fontSize = "1rem";
dateBtn.style.border = "none";
dateBtn.style.borderRadius = "16px";

//style for show date display
showDate.style.background = "black";
showDate.style.padding = "10px";
showDate.style.color = "white";
showDate.style.display = "none";

let christian = new Person("Christian", "BSIT", 22, "Software Engineer");

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(christian.display());
  }, 2000);
});

myPromise.then(function (value) {
  display.innerHTML = value;
});

dateBtn.addEventListener("click", function () {
  showDate.style.display = "block";
  let date = new Date();
  document.getElementById("showDate").innerHTML = date;
});

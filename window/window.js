console.log(window.location.hostname);
console.log(location.pathname);
// location.assign()
console.log(navigator.language);
console.log(navigator.onLine);
console.log(navigator.appName);
console.log(navigator.appCodeName);

// confirm("Are you sure you want to continue?");

let display = document.getElementById("display");

// let person = prompt("Please enter your name:", "Christian") ?? "Maki";
// let text = "";

// display.innerHTML = "Hello " + person + "! How are you?";

function add(a, b) {
  return a + b;
}

setInterval(function () {
  display.innerHTML = add(12, 12);
}, 1000);

// display.innerHTML = dist;

const { log } = require("async");

let display = document.getElementById("display");

let myPromise = new Promise(function (resolve) {
  setTimeout(() => {
    resolve("OK!");
  }, 3000);
});

function myDisplay(value) {
  display.innerHTML = value;
}

async function displayPromise() {
  let promise = await myPromise;
  myDisplay(promise);
}

async function getData() {
  let response = await fetch("data.json");
  let data = await response.json();

  console.log(data);
}

// displayPromise();
getData();




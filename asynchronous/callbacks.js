let display = document.getElementById("display");
let dateBtn = document.getElementById("dateBtn");

// dateBtn.addEventListener("click", showDate);

// let date = new Date();

// function showDate() {
//   display.innerHTML = `${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`;
// }

// passing a value to another function

// function add(a, b) {
//   return (display.innerHTML = `Result: ${a + b}`);
// }

// function values(x) {
//   add(x, 25);
// }

// setTimeout(() => {
//   values(15);
// }, 3000);

// function myDisplay(data) {
//   return (display.innerHTML = data);
// }

// function sum(a, b) {
//   let result = a + b;
//   myDisplay(result);
// }

// sum(30, 39);

function myDisplay(data) {
  return (display.innerHTML = data);
}

function getData(callback) {
  let ok = true;

  if (ok) {
    return callback(null, "Data");
  } else {
    callback("Error", null);
  }
}

getData((error, data) => {
  if (error) {
    myDisplay(error);
    return;
  }

  myDisplay(data);
});

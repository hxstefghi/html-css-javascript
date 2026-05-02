let display = document.getElementById("display");

function myDisplay(value) {
  display.innerHTML = value;
}

// async function getData() {
//   let response = await fetch("data.json");
//   let data = await response.json();

//   console.log(data);
// }

// getData();

let myPromise = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("I love you pooo!");
  }, 3000);
});

myPromise.then(function (value) {
  myDisplay(value);
});

// async function run() {
//   let res = await myPromise;

//   myDisplay(res);
// }

// run();

// async function run() {}

let promise2 = Promise.reject("Something went wrong!");

promise2
  .then(function (value) {
    myDisplay(value);
  })
  .catch(function (error) {
    myDisplay(error);
  });

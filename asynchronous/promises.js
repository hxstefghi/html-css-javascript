let display = document.getElementById("display");

function myDisplay(value) {
  return (display.innerHTML = value);
}

// let myPromise = new Promise(function (resolve, reject) {
//   let ok = false;

//   if (ok) {
//     resolve("OK");
//   } else {
//     reject("ERROR");
//   }
// });

// // using then() to display the result
// myPromise.then(
//   function (value) {
//     myDisplay(value);
//   },
//   function (value) {
//     myDisplay(value);
//   },
// );

// promise steps
// function step1() {
//   return Promise.resolve("Christian");
// }

// function step2(value) {
//   return Promise.resolve(value + "C.");
// }

// function step3(value) {
//   return Promise.resolve(value + "Catuday");
// }

// step1()
//   .then(function (value) {
//     return step2(value + " ");
//   })
//   .then(function (value) {
//     return step3(value + " ");
//   })
//   .then(function (value) {
//     return (display.innerHTML = value);
//   });

// let myPromise = new Promise(function (resolve, reject) {
//   let res = new XMLHttpRequest();
//   res.open("GET", "./callbacks.html");
//   res.onload = function () {
//     if (res.status === 200) {
//       resolve(res.responseText);
//     } else {
//       reject("File not found!");
//     }
//   };
//   res.send();
// });

// myPromise.then(
//   function (value) {
//     myDisplay(value);
//   },
//   function (error) {
//     myDisplay(error);
//   },
// );

// let promise = Promise.reject("I love you 143!!");

// promise.then(
//   function (value) {
//     myDisplay(value);
//   },
//   function (error) {
//     myDisplay(error);
//   },
// );

let { promise, resolve, reject } = Promise.withResolvers();

let success = Math.random() > 0.5;

setTimeout(function () {
  if (success) {
    resolve("Success!");
  } else {
    reject("Rejected!");
  }
}, 2000);

promise
  .then(function (value) {
    myDisplay(value);
  })
  .catch(function (error) {
    myDisplay(error);
  });

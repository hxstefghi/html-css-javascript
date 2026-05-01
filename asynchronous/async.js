let display = document.getElementById("display");

function myDisplay(value) {
  display.innerHTML = value;
}

// function step1() {
//   return Promise.resolve("A");
// }

// function step2(value) {
//   return Promise.resolve(value + "B");
// }

// function step3(value) {
//   return Promise.resolve(value + "C");
// }

// async function run() {
//   let v1 = await step1();
//   let v2 = await step2(v1);
//   let v3 = await step2(v2);

//   myDisplay(v3);
// }

// run();

// function step1() {
//   return Promise.resolve("OK");
// }

// async function run() {
//   let v1 = await step1();

//   myDisplay(v1);
// }

// run();

// let myPromise = new Promise(function (resolve) {
//   return setTimeout(function () {
//     resolve("I love youuu!");
//   }, 3000);
// });

// async function run() {
//   let v1 = await myPromise;

//   myDisplay(v1);
// }

// run();

async function run() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("I love you pooo!");
    }, 3000);
  });

  let v1 = await myPromise;

  myDisplay(v1);
}

run();

import { math, person, Person } from "./js/math.js";

// console.log(math(25, 25));

// let display = document.getElementById('display');

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve(math(25, 50) + " " + person.name);

    let person = new Person("Christian", 22, "BSIT");
    resolve(person.myDisplay());
  }, 2000);
});

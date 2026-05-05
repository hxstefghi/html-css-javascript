let display = document.getElementById("display");

// creating an array using array literal
// let arr = [3, 34, 19];

// creating an array using object Array
let arr = new Array(35, 50, "Christian");
// arr.push(25);

let arr2 = [4, 5, 6, 7];

let person = {
  name: "Christian",
  age: 10,
};

// let num1 = 3;
// let num2 = 5;

// using for loop to display all the array
// for (let i = 0; i < arr.length; i++) {
//   display.innerHTML += arr[i] + " ";
// }

// using for-in loop
for (let data in arr) {
  display.innerHTML += arr[data];
}

// to check if its an array
// console.log(arr instanceof Array);
// console.log(Array.isArray(person));
// console.log(typeof arr);

// // using length to know the length of an array
// console.log(arr.length);

// display.innerHTML = arr[0];

// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.push(50, "Christian pogi"));
// console.log(arr);
// console.log(arr.unshift("Jovani Iglopas", "BSIT"));
// console.log(arr);
// console.log(arr.at(5));
// console.log(arr.join(" "));
// console.log(arr.pop(1));
// console.log(arr);
// console.log(arr.pop(1));
// console.log(arr);
// console.log(arr.pop(2));
// console.log(arr);
console.log(arr.concat(arr2));
// console.log(arr.copyWithin(0, 2));
console.log(arr);
console.log(arr.splice(1, 2, "Inventive", "Python", "Science"));
console.log(arr);
// console.log(arr.slice(1, 2));

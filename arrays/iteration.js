let display = document.getElementById("display");

let arr = [3, 4, 3, 2, 6, 100];
let arr2 = ["Christian", "Math", "Mipo"];

let text = "";

// using function inside the map
// arr.map(function (value) {
//   let newValue = value * 2;
//   text += newValue + "<br>";

//   return (display.innerHTML = text);
// });

// using function outside the map, pinapasa ko lang yung parameter value nung sa map
arr.map(myArr);

function myArr(value, index) {
  let newValue = value * 2;

  text += newValue + " " + index + "<br>";

  return (display.innerHTML = text);
}

arr.reduce((total, value) => {
  return console.log(total + value);
});

arr3 = [...arr, ...arr2];
console.log(arr3);

arr2.map(mapArr);

function mapArr(value, index) {
  return console.log(value, index);
}

let result = arr.reduce(reduceArr);

function reduceArr(total, value, index) {
  console.log(index);
  return total + value;
}

// console.log(result);

let filt = arr.filter((value) => value > 5);

console.log(filt);

const arr4 = [5, 10, 35, 39, 32, 95];

console.log(arr4.find(myFind));

function myFind(value, index) {
  return value > 10;
}

let display = document.getElementById("display");

// let arr = [2, 3, 4, 5, 2, 10, 7, 8, 9];
let arr = new Array(3, 503, 100, 6, 11, 13, 15, 20);

function myFunction(value) {
  return value > 4;
}

console.log(arr.find((x, index) => x > 5));
console.log(arr.findLast(myFunction));
console.log(arr.includes(2, 2));

console.log(arr.sort());
// console.log(arr.reverse());

let arr2 = [];
for (let i = arr.length - 1; i >= 0; i--) {
  arr2[i] = arr[i];
}

console.log(arr2);
console.log(
  arr2.sort(function (a, b) {
    return b - a;
  }),
);

let arr3 = ["Catuday", "Iglopas", "Cajucom", "Chua", "Clemen"];

display.innerHTML = arr3;

function toAlphabetically() {
  arr3.sort();

  display.innerHTML = arr3;
}

function toReverse() {
  arr3.reverse();

  display.innerHTML = arr3;
}

console.log(0.5 - Math.random());
console.log(Math.ceil(4.21));

for (let i = arr.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));

  console.log(j);
}

console.log(Math.min.apply(null, arr));

const myArr = [
  { name: "Christian", price: 400 },
  { name: "Claude", price: 98 },
  { name: "Codex", price: 200 },
  { name: "BroCode", price: 219 },
  { name: "MiniMax", price: 903 },
  { name: "Kimi", price: 245 },
  { name: "Grok", price: 50 },
  { name: "GPT", price: 23 },
];

console.log(myArr);

let newArr = myArr.toSorted(function (a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
});

let text = "";
newArr.forEach(myArray);

function myArray(arr, value) {
  text += arr.name + " " + arr.price + " " + value + "<br>";
}

display.innerHTML = text;

console.log(newArr);

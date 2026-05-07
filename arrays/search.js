let display = document.getElementById("display");

let arr = [2, 3, 4, 5, 2, 10, 7, 8, 9];

function myFunction(value) {
  return value > 4;
}

console.log(arr.find((x, index) => x > 5));
console.log(arr.findLast(myFunction));
console.log(arr.includes(2, 2));

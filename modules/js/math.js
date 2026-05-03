export function add(a, b) {
  return `The result is: ${a + b}`;
}

export default function myDisplay(value) {
  let display = document.getElementById("display");

  display.innerHTML = value;
}

export let person = {
  name: "Christian",
  age: 22,
  course: "BSIT",
};

export class Person {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  myDisplay() {
    let display = document.getElementById("display");

    return (display.innerHTML = `Name: ${this.name} Age: ${this.age} Course: ${this.course}`);
  }
}

export * from "./string.js";

// creating object to an existing object
const person = {
  firstName: "Christian",
  lastName: "Catuday",
};

const animal = {
  fur: "Cat",
  sound: "Meow",
};

const fruits = [["pears", 900]];

let man = Object.create(person);
man.firstName = "Miko";
man.language = "English";

let fruitsObj = Object.fromEntries(fruits);

const person1 = {
  firstName: "Alexis",
  lastName: "Catuday",
  age: 50,
  language: "Filipino",
};

const person2 = {
  firstName: "Audrey",
  lastName: "Cole",
  color: "Pink",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const x = person1;
x.firstName = "Sarah";

console.log(x);

// source to target and returns the target
Object.assign(person1, person2);

let text = Object.entries(person1)
  .map(([key, value]) => `${key}: ${value}`)
  .join("<br>");

const person4 = {
  firstName: "Christian",
  lastName: "Catuday",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Lizbeth",
  lastName: "Tabuena",
};

const y = person4.fullName.bind(member);

const colors = [
  {
    name: "Blue",
    lightness: 80,
  },
  {
    name: "Brown",
    lightness: 50,
  },
];

// console.log(colors[0].name);

let displayText = "";

const groupedBy = ({ lightness }) => {
  return lightness > 60 ? "Light" : "Dark";
};

const result = Object.groupBy(colors, groupedBy);

for (let [x, y] of result.Light.entries()) {
  displayText += `${y.name}: ${y.lightness} <br>`;
}

for (let [x, y] of result.Light.entries()) {
  console.log(y.name);
}

for (let [x, y] of result.Dark.entries()) {
  displayText += `${y.name}: ${y.lightness} <br>`;
}

document.getElementById("displayObject").innerHTML = displayText;

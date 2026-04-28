let display = document.getElementById("display");

// creating an object with parameter values
function Person(first, last, age, color) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.colors = color;
}

function Animal(fur, eyeColor, age) {
  this.fur = fur;
  this.eye = eyeColor;
  this.age = age;
}

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  display() {
    return `Name: ${this.name}
            Position: ${this.position}
            Salary: ${this.salary}`;
  }
}

Employee.prototype.language = "English";
Employee.prototype.displayName = function () {
  return this.name + " " + this.position;
};

let christian = new Person("Christian", "Catuday", 22, "Brown");

let Maki = new Animal("Cat", "yellow", 2);
let alexis = new Employee("Alexis Catuday", "Medical Nurse", 25000);
let jaysen = new Employee("Jaysen", "Graphic Designer", 30000);

display.innerHTML = alexis.displayName();

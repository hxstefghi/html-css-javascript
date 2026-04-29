let displayText = document.getElementById("display");

class Animal {
  constructor(fur, color, year) {
    this.fur = fur;
    this.color = color;
    this.year = year;
  }

  displayInfo() {
    return `Fur: ${this.fur}
            Color: ${this.color}
            Year: ${this.year}`;
  }
}

// inheritance
class Car {
  constructor(name, color, year) {
    this.name = name;
    this.color = color;
    this.year = year;
  }

  getYear(x) {
    return x - this.year;
  }
}

class Model extends Car {
  constructor(name, color, year, mod) {
    super(name, color, year);
    this.model = mod;
  }
}

let date = new Date();

Animal.prototype.language = "Filipino";

let maki = new Animal("Cat", "Black and Brown", "9 months");
// let toyota = new Car("Innova", 2012);

// let honda = new Car("Honda", "black", 2024);
let honda = new Model("Honda", "red", 2023, "honda civic");

displayText.innerHTML = `Name: ${honda.name} Color: ${honda.color} Year: ${honda.getYear(date.getFullYear())} Model: ${honda.model}`;

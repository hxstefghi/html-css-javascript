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
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  carYear(x) {
    return x - this.year;
  }
}

class Model extends Car {
  constructor(name, year, mod) {
    super(name, year);
    this.model = mod;
  }

  carModel() {
    let date = new Date();
    return (
      this.carYear(date.getFullYear()) + " " + this.name + " " + this.model
    );
  }
}

let date = new Date();

Animal.prototype.language = "Filipino";

let maki = new Animal("Cat", "Black and Brown", "9 months");
let toyota = new Car("Innova", 2012);

let honda = new Model("Honda", 2024, "Honda Civic");

displayText.innerHTML = `${honda.carModel()}`;

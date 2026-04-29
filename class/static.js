let display = document.getElementById("display");

class Animal {
  constructor(name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
  }

  static display(obj) {
    return obj.name + " " + obj.type + " " + obj.age;
    // return "Hello World";
  }
}

let maki = new Animal("Maki", "Cat", 2025);

display.innerHTML = Animal.display(maki);

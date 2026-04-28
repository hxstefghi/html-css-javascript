let displayText = document.getElementById("displayText");

// getter
const person = {
  firstName: "Christian",
  lastName: "Catuday",
  color: "Blue",
  get colors() {
    return this.color.toUpperCase();
  },
};

// setter
const animal = {
  fur: "Cat",
  sound: "",
  set animalSound(sounds) {
    return (this.sound = sounds);
  },
};

Object.defineProperty(animal, "color", { value: "Brown and Black" });

// Object.preventExtensions(animal);
console.log(Object.isExtensible(animal));

animal.animalSound = "Arf arf arf!";

text = Object.getPrototypeOf(animal);

displayText.innerHTML = animal.color;

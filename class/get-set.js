let display = document.getElementById("display");

class Car {
  constructor(brand) {
    this.carname = brand;
  }

  get cname() {
    return this.carname;
  }

  set cname(name) {
    this.carname = name;
  }
}

let honda = new Car("Honda");
honda.cname = "Toyota";

display.innerHTML = honda.cname;

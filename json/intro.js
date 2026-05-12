let jsonString =
  '{ "person":[{"name": "Christian", "age": 22, "course": "BSIT"}] }';

let obj2 = {
  name: "Christian",
  age: 22,
  color: "Brown",
};

let txt = JSON.stringify(obj2);

console.log(txt);
txt2 = JSON.parse(txt);
console.log(txt2);

let obj3 = {
  name: "Christian",
  birthday: "October 13, 2003",
};

obj3["number"] = 13;

console.log(obj3.number);

for (let x in obj3) {
  console.log(obj3[x]);
}

let variable = "Chris";

let person = JSON.parse(jsonString);

let display = document.getElementById("display");

console.log(person.person);

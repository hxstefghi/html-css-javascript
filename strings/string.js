display = document.getElementById("display");

let header = "<h2>Template string</h2>";
let text = ["Javascript", "Nodejs", "Reactjs", "Expressjs"];

let html = `${header}<ul>`;

for (let x of text) {
  html += `<li>${x}</li>`;
}

html += "</ul>";
console.log(html);

display.innerHTML = html;

// string methods

let txtString = "napAka pogi ko talaga";
console.log(txtString.codePointAt(1));
console.log(txtString.at(1));
console.log(txtString[2]);
console.log(txtString.concat(" ", "World ", "Christian"));
console.log(txtString.subs);

let num = "9";
console.log(num.padEnd(4, "0"));
console.log(num.repeat(5));

let greet = "Good morning, Christian!";
console.log(greet);
console.log(greet.replace("morning", "afternoon"));

// string search

// greet.indexOf("morning");
console.log(greet.indexOf("morning", 2));
console.log(greet.search("morning"));
console.log(Array.isArray(greet));
Array.from()

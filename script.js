// let paragraph = document.getElementById("demo");

// // paragraph.textContent = "Tanga ka pala eh";

// let main = document.getElementById("main");
// let element = main.getElementsByTagName("p");

// paragraph.innerHTML =
//   "This is the first element found: " + element[0].innerHTML;

let forms = document.forms["form1"];
let text = "";

for (let i = 0; i < forms.length; i++) {
  text += forms[i].value + "<br>";
}

let demo = document.getElementById("demo");
demo.innerHTML = text;

let info = document.getElementById("info").style;
info.color = "blue";
info.fontSize = "2rem";

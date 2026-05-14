function removeElement() {
  let p = document.getElementById("id01");
  p.remove();
}

function textColor() {
  let p = document.querySelectorAll("p");

  for (let i = 0; i < p.length; i++) {
    p[i].style.color = "red";
  }
}

// 3 different way to get the value of an element
let p1 = document.getElementById("id01");
console.log(p1.innerHTML);
console.log(p1.firstChild.nodeValue);
console.log(p1.childNodes[0].nodeValue);

// creating an p element and append it in the p01 parent
let para = document.createElement("p");
let text = document.createTextNode("Web Developer");
para.appendChild(text);

let parent = document.getElementById("p01");
parent.appendChild(para);

let display = document.getElementById("text01");
display.innerHTML = innerHeight + " " + innerWidth;

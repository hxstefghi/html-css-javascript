// let paragraph = document.getElementById("demo");

// // paragraph.textContent = "Tanga ka pala eh";

// let main = document.getElementById("main");
// let element = main.getElementsByTagName("p");

// paragraph.innerHTML =
//   "This is the first element found: " + element[0].innerHTML;

// let forms = document.forms["form1"]["fname"].value;
// let text = "";

// if (forms == "") {
//   alert("Name must be filled out!");
//   return false;
// }

// function validateForm() {
//   let x = document.forms["form1"]["fname"].value;

//   if (x == "") {
//     alert("Name must be filled out!");
//     return false;
//   }
// }

// function validateNumber() {
//   y = document.getElementById("number").value;
//   let displayText;

//   if (isNaN(y) || y < 1 || y > 10) {
//     displayText = "Input is not supported";
//   } else {
//     displayText = "Input is OK!";
//   }

//   document.getElementById("display").innerHTML = displayText;
// }

// for (let i = 0; i < forms.length; i++) {
//   text += forms[i].value + "<br>";
// }

// let demo = document.getElementById("demo");
// demo.innerHTML = text;

// let info = document.getElementById("info").style;
// info.color = "blue";
// info.fontSize = "2rem";

function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);

  id = setInterval(frame, 1);
  function frame() {
    if (pos == 150) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

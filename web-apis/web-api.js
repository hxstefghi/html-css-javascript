let display = document.getElementById("display");
let validDisplay = document.getElementById("validDisplay");

// fetch("../text.txt")
//   .then((x) => x.text())
//   .then((r) => (display.innerHTML = r));

async function getFile() {
  txt = await fetch("../text.txt");
  data = await txt.text();

  return (display.innerHTML = data);
}

// getFile();

function myLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(myPosition, myError);
  } else {
    display.innerHTML = "You browser doesn't support the geolocation";
  }
}

function myPosition(position) {
  display.innerHTML = `The longitude is ${position.coords.accuracy}`;
}

function myError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      display.innerHTML = "The location is denied by the user";
      break;
  }
}

function goBack() {
  window.history.back();
}

localStorage.setItem("fullName", "Christian pogi");
console.log(localStorage.getItem("fullName"));

console.log(navigator.geolocation);

myLocation();

function isValid() {
  let fName = document.getElementById("fnameInp");
  if (!fName.checkValidity()) {
    validDisplay.innerHTML = fName.validationMessage;
  } else {
    validDisplay.innerHTML = "OK!";
  }
}

let w;

function startWorker() {
  if (typeof w == "undefined") {
    w = new Worker("web-worker.js");
  }

  w.onmessage = function (event) {
    document.getElementById("workerDisplay").innerHTML = event.data;
  };
}

console.log(typeof Worker);

function loadTxt() {
  let xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    document.getElementById("demo").innerHTML =
      this.getResponseHeader("content-type");
  };

  xhttp.open("GET", "../text.txt");
  xhttp.send();
}

// document.getElementById("display").innerHTML = loadTxt();

let inputTxt = document.getElementById('inputTxt');
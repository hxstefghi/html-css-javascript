let display = document.getElementById("display");

let xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
  let res = this.responseText;
  let user = JSON.parse(res);
  display.innerHTML = user.user[0].color;
};
xmlhttp.open("GET", "./user.json");
xmlhttp.send();

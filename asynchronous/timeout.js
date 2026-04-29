let display = document.getElementById("display");

// let displayText = () => {
//   display.innerHTML = "I love you 3000!";
// };

// setTimeout(displayText, 3000);

// function displayText() {
//   return (display.innerHTML = "I love you pooo!");
// }
// setTimeout(displayText, 3000);

function clock() {
  d = new Date();

  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  display.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(clock, 1000);

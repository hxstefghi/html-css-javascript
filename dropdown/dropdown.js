let btnLogin = document.getElementById("btn-login");
let aboutBtn = document.getElementById("about-dropdown");

aboutBtn.addEventListener("click", () => {
  let aboutContent = document.getElementById("about-content");

  aboutContent.classList.toggle("show");
});

btnLogin.addEventListener("click", () => {
  // btnLogin.innerText = "Clicked!";

  if (btnLogin.innerText === "Login") {
    btnLogin.innerText = "Clicked!";
  } else {
    btnLogin.innerText = "Login";
  }
});

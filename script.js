let themeBtn = document.querySelector("#theme-toggle");
let themeIcon = document.querySelector("#theme-icon");
let LN =document.querySelector(".ln");
let isLight = false; // Default is dark

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  isLight = !isLight;

  // Change icon based on theme
  if (isLight) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    LN.innerText="Lumos!";
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    LN.innerText="Nox!";
  }
});


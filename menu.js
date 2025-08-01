const navButton = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu a");
const navInner = document.querySelector(".nav__inner");
let f = 0;

console.log(navButton);
navButton.addEventListener("click", () => {
  console.log("aaaa");
  f = (f + 1) % 2;
  if (f == 1) {
    navButton.style.borderRadius = "40px 40px 20px 20px";
    navMenu.textContent = "CLOSE";
    navInner.classList.add("active");
    navButton.classList.add("nav__click");
  } else {
    navMenu.textContent = "MENU";
    navInner.classList.remove("active");
    navButton.style.borderRadius = "20px";
  }
});

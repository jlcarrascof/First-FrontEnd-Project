const hamburger = document.querySelector(".nav__icon");
const menu = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("nav__list--show");
});

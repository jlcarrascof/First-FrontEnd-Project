const hamburger = document.querySelectorAll(".nav__icon");
const menu = document.querySelector(".nav__list");

hamburger.forEach((element) => {
    element.addEventListener("click", () => {
        // alert("Hello world");
        menu.classList.toggle("nav__list--show");
    });
})

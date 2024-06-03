const hamburger = document.querySelector(".nav__icon");
const menu = document.querySelector(".nav__list");
let open = true;

hamburger.addEventListener("click", () => {

    if (open) {
        hamburger.src = "./images/icon-close.svg";
        open = false;
    } else {
        hamburger.src = "./images/icon-hamburger.svg";
        open = true;
    }

    menu.classList.toggle("nav__list--show");
});

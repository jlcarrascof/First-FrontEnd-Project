const hamburger = document.querySelector(".nav__icon");
const logo = document.querySelector(".nav__logo");
const menu = document.querySelector(".nav__list");
let open = true;

hamburger.addEventListener("click", () => {

    if (open) {
        logo.src = "./images/logo-bookmark-white.svg";
        hamburger.src = "./images/icon-close.svg";
        open = false;
    } else {
        logo.src = "./images/logo-bookmark.svg";
        hamburger.src = "./images/icon-hamburger.svg";
        open = true;
    }

    menu.classList.toggle("nav__list--show");
});

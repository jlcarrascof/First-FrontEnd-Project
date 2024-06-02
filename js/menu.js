const hamburger = document.querySelectorAll(".nav__icon");

hamburger.forEach((element) => {
    element.addEventListener("click", () => {
        alert("Hello world");
    });
})

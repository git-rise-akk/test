const menu = document.querySelector(".menu__phone");
const exit = document.querySelector(".menu__phone-cross");
const hamburger__menu = document.querySelector(".hamburger__menu");

hamburger__menu.addEventListener("click", function() {
    menu.style.transform = "translateX(0%)";
});

exit.addEventListener("click", function() {
    menu.style.transform = "translateX(100%)";
});
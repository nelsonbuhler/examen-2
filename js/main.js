var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var titlebox = document.querySelector(".titleburger");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  titlebox.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

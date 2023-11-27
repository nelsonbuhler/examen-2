var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var titleburger = document.querySelector(".titleburger");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  titleburger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

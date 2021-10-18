const menu = document.querySelector(".btn-burguer");
const collapse = document.querySelector(".mobile-menu__collapse");
const connectDropdown = document.querySelector(".dropdown-li");
const connectTarget = document.querySelector(".dropdown-target");

menu.addEventListener("click", function () {
  menu.classList.toggle("open");
  collapse.classList.toggle("active");
});

connectDropdown.addEventListener("click", function () {
  connectDropdown.classList.toggle("open");
  connectTarget.classList.toggle("active");
});

/** @format */

function toggleNav() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.onresize = function () {
  document.body.height = window.innerHeight;
};
window.onresize();

document.querySelector(".hamburger-icon").addEventListener("click", toggleNav);

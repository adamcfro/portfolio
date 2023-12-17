/** @format */

/**
 * Toggles the navigation menu.
 */
function toggleNav() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/**
 * Function to add event listeners and start the application.
 */
function startApp() {
  window.onresize = function () {
    document.body.height = window.innerHeight;
  };
  window.onresize();

  document
    .querySelector(".hamburger-icon")
    .addEventListener("click", toggleNav);

  document.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop >= 600) {
      document.querySelector(".skills-info").style.animationName = "fadeIn";
      setTimeout(() => {
        document.querySelector(".skills-info").style.opacity = 1;
      }, 2000);
    }
  });
}

startApp();

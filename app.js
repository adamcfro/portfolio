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
 * Removes scroll event listener and adds highlight animation to skills.
 */
function addHighlightToSkills() {
  if (document.documentElement.scrollTop >= 600) {
    document.removeEventListener("scroll", addHighlightToSkills);
    const list = document.querySelectorAll(".skills-info span");
    for (let i = 0; i < list.length; i++) {
      list[i].classList.add("highlight-skills");
    }
  }
}

/**
 * Removes scroll event listener and adds an arrow to contact section. Also
 * highlights "Get in Touch".
 */
function addArrowToContactSection() {
  const viewportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  if (
    document.documentElement.scrollTop >= 2600 ||
    (viewportWidth < 651 && document.documentElement.scrollTop >= 2000)
  ) {
    window.removeEventListener("scroll", addArrowToContactSection);

    const img = document.createElement("img");
    img.setAttribute("src", "img/arrow.gif");
    img.setAttribute("alt", "arrow");
    img.classList.add("arrow");
    document.querySelector(".contact-bottom").appendChild(img);
  }
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

  document.addEventListener("scroll", addHighlightToSkills);

  window.addEventListener("scroll", addArrowToContactSection);
}

startApp();

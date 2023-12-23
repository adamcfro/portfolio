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
 * Closes the nav menu when a nav link is clicked.
 *
 * @param {Event} e
 */
function closeNav(e) {
  if (e.target.classList.contains("header-link")) {
    const hamburger = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".menu-links");
    hamburger.classList.remove("open");
    menu.classList.remove("open");
  }
}

/**
 * Closes the nav menu when a click occurs outside the nav menu.
 *
 * @param {Event} e
 */
function closeNavOnFocusOut(e) {
  const hamburger = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");
  if (
    menu.classList.contains("open") &&
    !e.target.isEqualNode(hamburger) &&
    !e.target.isEqualNode(menu) &&
    !menu.contains(event.target)
  ) {
    hamburger.classList.remove("open");
    menu.classList.remove("open");
  }
}

/**
 * Removes scroll event listener and adds highlight animation to first skill.
 */
function addFirstHighlightToSkills() {
  if (document.documentElement.scrollTop >= 600) {
    document.removeEventListener("scroll", addFirstHighlightToSkills);
    document
      .querySelector(".skills-info span:nth-child(1)")
      .classList.add("highlight-skill-1");
  }
}

/**
 * Removes scroll event listener and adds highlight animation to second skill.
 */
function addSecondHighlightToSkills() {
  if (document.documentElement.scrollTop >= 600) {
    document.removeEventListener("scroll", addSecondHighlightToSkills);
    document
      .querySelector(".skills-info span:nth-child(2)")
      .classList.add("highlight-skill-2");
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

  document.addEventListener("click", closeNav);

  document.addEventListener("click", closeNavOnFocusOut);

  document.addEventListener("scroll", addFirstHighlightToSkills);

  document.addEventListener("scroll", addSecondHighlightToSkills);

  window.addEventListener("scroll", addArrowToContactSection);
}

startApp();

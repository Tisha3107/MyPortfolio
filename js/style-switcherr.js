// Toggling the Style Switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
if (styleSwitcherToggle) {
  styleSwitcherToggle.addEventListener("click", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher) {
      styleSwitcher.classList.toggle("open");
      console.log("Style switcher toggled.");
    } else {
      console.error("Style switcher element not found.");
    }
  });
} else {
  console.error("Style switcher toggler element not found.");
}

// Hide Style Switcher on Scroll
window.addEventListener("scroll", () => {
  const styleSwitcher = document.querySelector(".style-switcher");
  if (styleSwitcher && styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
    console.log("Style switcher hidden on scroll.");
  }
});

// Theme Colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Theme Light and Dark Mode
const dayNight = document.querySelector(".day-night");
if (dayNight) {
  dayNight.addEventListener("click", () => {
    const icon = dayNight.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-sun");
      icon.classList.toggle("fa-moon");
      document.body.classList.toggle("dark");
      console.log("Day-night mode toggled.");
    } else {
      console.error("Icon element not found.");
    }
  });

  window.addEventListener("load", () => {
    const icon = dayNight.querySelector("i");
    if (icon) {
      if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
      } else {
        icon.classList.add("fa-moon");
      }
    } else {
      console.error("Icon element not found.");
    }
  });
} else {
  console.error("Day-night toggler element not found.");
}

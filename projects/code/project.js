import { navbar } from "./js/navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  // Navbar (button, button Icon, dropdown, class Active)
  navbar(
    ".button--navbar",
    ".button--navbar i",
    ".dropdown",
    "dropdown--active"
  );
});

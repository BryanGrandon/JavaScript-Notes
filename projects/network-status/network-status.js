"use strict";
/**
 * The function checks if the user is online or offline and displays a message accordingly,
 * which is removed after 1 second.
 */
const isOnline = () => {
  const $section = document.createElement("section");
  $section.classList.add("status");

  if (navigator.onLine) {
    $section.textContent = `Connection restored`;
    $section.classList.remove("offline");
    $section.classList.add("online");
  } else {
    $section.textContent = `Lost connection`;
    $section.classList.remove("online");
    $section.classList.add("offline");
  }
  document.body.insertAdjacentElement("afterbegin", $section);

  setTimeout(() => document.body.removeChild($section), 1000);
};

/* The code is adding event listeners to the `window` object for the `online` and `offline` events. */
window.addEventListener("online", (e) => isOnline());
window.addEventListener("offline", (e) => isOnline());

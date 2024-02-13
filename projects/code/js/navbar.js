/**
 * The `navbar` function toggles the visibility of a dropdown menu and changes the icon of a button
 * when clicked.
 * @param button - The `button` parameter is a CSS selector for the button element that triggers the
 * dropdown menu.
 * @param buttonI - The `buttonI` parameter is a CSS selector for the button icon element.
 * @param dropdown - The `dropdown` parameter is a string that represents the selector for the dropdown
 * element in the HTML.
 * @param active - The "active" parameter is a string that represents the class name that will be added
 * or removed from the dropdown element to show or hide it respectively.
 */

const navbar = (button, buttonI, dropdown, active) => {
  const $buttonIcon = document.querySelector(buttonI);
  const $dropdown = document.querySelector(dropdown);

  document.addEventListener("click", (e) => {
    if (e.target.matches(button) || e.target.matches(buttonI)) {
      $dropdown.classList.toggle(active);
      const isOpen = $dropdown.classList.contains(active);
      $buttonIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    }
  });
};

export { navbar };

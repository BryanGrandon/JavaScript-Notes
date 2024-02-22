const $button = document.querySelector(".button--navbar");
const $buttonIcon = document.querySelector(".button--navbar i");
const $dropdownMenu = document.querySelector(".dropdown-menu");

$button.addEventListener("click", () => {
  $dropdownMenu.classList.toggle("dropdown-menu--open");
  const isOpen = $dropdownMenu.classList.contains("dropdown-menu--open");
  $buttonIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

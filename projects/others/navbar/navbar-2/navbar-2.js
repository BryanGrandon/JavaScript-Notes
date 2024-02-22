const $dropdown = document.querySelector(".dropdown");
const $button = document.querySelector(".button--navbar");
const $buttonIcon = document.querySelector(".button--navbar i");

$button.addEventListener("click", () => {
  $dropdown.classList.toggle("dropdown--active");
  const isOpen = $dropdown.classList.contains("dropdown--active");
  $buttonIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

const $button = document.querySelector(".button--color-change");
const $hexText = document.querySelector(".color-change__hex ");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

$button.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  const $html = document.documentElement;
  $html.style.setProperty("background-color", hexColor);
  $hexText.textContent = hexColor;
});

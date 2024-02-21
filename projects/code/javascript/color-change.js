import { createModal } from "./modal.js";

export const colorChange = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const getRandomNumber = () => Math.floor(Math.random() * hex.length);

  const content = `
  <section class="color-change">
    <section class="color-change__section">
        <p class="color-change__text">
        Background: <span class="color-change__hex"></span>
        </p>
        <button class="button color-change__button">Change</button>
    </section>
  </section>`;

  document.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.matches(".btn-color")) {
      createModal("Color Change", content);
    }

    if (e.target.matches(".color-change__button")) {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
      }
      const $hexText = document.querySelector(".color-change__hex");
      const $container = document.querySelector(".color-change");

      $container.style.setProperty("background-color", hexColor);
      $hexText.textContent = hexColor;
    }
  });
};

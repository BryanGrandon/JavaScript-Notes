import { createModal } from "./modal.js";

const calculator = (date) => {
  let userYear = Number(date[0]);
  let userMonth = Number(date[1]);
  let userDay = Number(date[2]);

  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();

  let response;
  if (month >= userMonth) {
    day >= userDay
      ? (response = year - userYear)
      : (response = year - userYear - 1);
  } else {
    response = year - userYear - 1;
  }
  return response;
};

export const ageCalculator = () => {
  const content = `
  <section class="age-calculator">  
    <p class="age-calculator__text">Enter your date of birth:</p>
    <input type="date" class="age-calculator__input" required />
    <button class="button age-calculator__button">Calculate Age</button>
  </section>
  `;

  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-age-calculator")) {
      createModal("Age Calculator", content);
    }
    if (e.target.matches(".age-calculator__button")) {
      const $input = document.querySelector(".age-calculator__input").value;
      const $container = document.querySelector(".age-calculator");

      const $response = document.createElement("p");
      $response.classList.add("age-calculator__response");

      const date = $input.split("-");
      const age = calculator(date);
      $response.textContent = `Your age is ${age} years old`;
      $container.insertAdjacentElement("afterend", $response);
    }
  });
};

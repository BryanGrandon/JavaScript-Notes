const $form = document.querySelector(".age-calculator__form");

const ageCalculator = (date) => {
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

$form.addEventListener("submit", () => {
  const $input = document.querySelector(".input--age-calculator").value;
  const $response = document.querySelector(".age-calculator__response");

  const date = $input.split("-");
  const age = ageCalculator(date);

  $response.textContent = `Your age is ${age} years old`;
});

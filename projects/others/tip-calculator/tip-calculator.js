const $form = document.querySelector(".tip-calculator__form");

$form.addEventListener("submit", (e) => {
  const $amount = Number(document.querySelector(".input--amount").value);
  const $percentage = Number(
    document.querySelector(".input--percentage").value
  );
  const result = ($amount * $percentage) / 100;

  const $total = document.querySelector(".total");
  $total.textContent = `$${$amount + result}`;
});

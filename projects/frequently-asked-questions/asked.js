$buttons = document.querySelectorAll(".button--question-card");
$buttonIcon = document.querySelector(".button--question-card i");
$response = document.querySelector(".question-card__back");

/* The code is adding a click event listener to each element with the class "button--question-card".
When one of these buttons is clicked, it toggles the "question-card--active" class on the next
sibling element of the button's parent element. It also updates the icon class to either "fa-solid
fa-minus" or "fa-solid fa-plus" based on whether the question card is active or not. */

$buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.nextElementSibling;
    question.classList.toggle("question-card--active");
    const icon = e.currentTarget.firstChild.nextSibling;
    console.log(icon);

    const isActive = question.classList.contains("question-card--active");
    icon.classList = isActive ? "fa-solid fa-minus" : "fa-solid fa-plus";
  });
});

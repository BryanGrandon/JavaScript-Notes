/**
 * The `createModal` function dynamically creates and adds a modal with the specified title and content to the document body.
 * @param title - Used to set the title of the modal.
 * @param content - Used to set the content inside the modal.
 */

const createModal = (title, content) => {
  const $container = document.createElement("article");
  $container.classList.add("container__modal");

  const modal = `
    <article class="modal">
        <header class="modal__header">
        <h3 class="modal__title">${title}</h3>
        <button class="modal__button">
            <i class="fa-solid fa-x"></i>
        </button>
        </header>
        <section class="modal__content">
        ${content}
        </section>
    </article>`;

  $container.innerHTML = modal;
  document.body.appendChild($container);
  console.log($container);
};

document.addEventListener("click", (e) => {
  if (
    e.target.matches(".modal__button") ||
    e.target.matches(".modal__button i")
  ) {
    const $container = document.querySelector(".container__modal");
    document.body.removeChild($container);
  }
});

export { createModal };

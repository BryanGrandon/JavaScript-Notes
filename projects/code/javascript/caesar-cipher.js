import { createModal } from "./modal.js";

const caesarCipher = () => {
  const content = `
    <article>
        Content
    <article>
  `;

  document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.matches(".btn-cipher")) {
      createModal("Caesar Cipher", content);
    }
  });
};

export { caesarCipher };

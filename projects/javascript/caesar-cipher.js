import { createModal } from "./modal.js";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const encryption = (message, scrolling) => {
  const arrMessage = message.toUpperCase().split("");
  let result = [];

  arrMessage.map((e) => {
    let isIncluded = alphabet.includes(e);

    if (isIncluded) {
      let indexScrolling = alphabet.indexOf(e) + scrolling;

      const isGreaterThan25 = indexScrolling > 25;
      const isLessThanN25 = indexScrolling < 0 && indexScrolling >= -25;

      if (isGreaterThan25) result += alphabet[indexScrolling - 26];
      else if (isLessThanN25) result += alphabet[indexScrolling + 26];
      else result += alphabet[indexScrolling];
    } else {
      // If the element is not in the alphabet, the element is added to the result
      result += e;
    }
  });
  return result;
};

const range = () => {
  let input = document.querySelector(".caesar-cipher__range");
  let value = document.querySelector(".caesar-cipher__range-value");
  input.addEventListener("input", () => (value.innerHTML = input.value));
};

export const caesarCipher = () => {
  const content = `
    <textarea
      class="caesar-cipher__message"
      placeholder="Enter your message..."
    ></textarea>
    <section class="caesar-cipher__section">
      <p class="caesar-cipher__text">Shift number:</p>
      <input
        type="range"
        max="25"
        min="-25"
        value="2"
        class="caesar-cipher__range"
      />
      <p class="caesar-cipher__range-value">2</p>
    </section>
    <button class="button caesar-cipher__button">Encryption</button>
    <p class="caesar-cipher__message-value">The coded message is:</p>
`;

  document.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.matches(".btn-cipher")) {
      createModal("Caesar Cipher", content);
      range();
    }

    if (e.target.matches(".caesar-cipher__button")) {
      const $message = document.querySelector(".caesar-cipher__message");
      const $scrolling = document.querySelector(".caesar-cipher__range");
      const $result = document.querySelector(".caesar-cipher__message-value");

      let message = $message.value;
      let scrolling = Number($scrolling.value);

      $result.textContent = encryption(message, scrolling);

      $scrolling.value = scrolling;
    }
  });
};

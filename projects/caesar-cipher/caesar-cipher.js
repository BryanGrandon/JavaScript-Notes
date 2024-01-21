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
      const isLessThanN25 = indexScrolling < 0 && indexScrolling > -25;

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

// -------- DOM -------- //

const $message = document.querySelector(".input--message");
const $scrolling = document.querySelector(".input--scrolling");
const $result = document.querySelector(".encryption__result");

document.addEventListener("click", (e) => {
  if (e.target.matches(".button--encryption")) {
    let message = $message.value;
    let scrolling = Number($scrolling.value);

    if (scrolling > 25) {
      scrolling = 25;
      alert("The maximum number is 25");
    } else if (scrolling < -25 && scrolling < 0) {
      scrolling = -25;
      alert("The minimum number is -25");
    }

    const caesarCipher = encryption(message, scrolling);
    $result.textContent = caesarCipher;

    $scrolling.value = scrolling;
  }
});

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
  "K",
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

/**
 * The cipher function takes a message and a scrolling value, converts the message to uppercase, and
 * returns a new string where each character is shifted by the scrolling value in the alphabet.
 * @param message - The `message` parameter is a string that represents the message you want to encrypt
 * @param scrolling - The scrolling parameter determines how many positions each letter in the message
 * should be shifted in the cipher. A positive scrolling value will shift the letters to the right,
 * while a negative scrolling value will shift the letters to the left.
 * @returns The function `cipher` returns the result of the ciphered message.
 */
const encryption = (message, scrolling) => {
  const arrMessage = message.toUpperCase().split("");
  let result = [];

  arrMessage.map((e) => {
    let index = alphabet.indexOf(e);
    let indexScrolling = index + scrolling;

    if (indexScrolling > 25) result += alphabet[indexScrolling - 26];
    else if (indexScrolling < 0 && indexScrolling > -25) {
      result += alphabet[indexScrolling + 26];
    } else {
      result += alphabet[indexScrolling];
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

import "./javascript/device-detection.js";
import "./javascript/network-status.js";
import { searchFilter } from "./javascript/search.js";
import { caesarCipher } from "./javascript/caesar-cipher.js";
import { colorChange } from "./javascript/color-change.js";
import { ageCalculator } from "./javascript/age-calculator.js";

document.addEventListener("DOMContentLoaded", () => {
  searchFilter(".project-search__input", ".project-search__title");
  caesarCipher();
  colorChange();
  ageCalculator();
});

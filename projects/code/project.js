import "./javascript/device-detection.js";
import "./javascript/network-status.js";
import { searchFilter } from "./javascript/search.js";

document.addEventListener("DOMContentLoaded", () => {
  searchFilter(".project-search__input", ".project-search__title");
});

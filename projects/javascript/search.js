/**
 * The `searchFilter` function allows for filtering elements based on user input in a search field.
 * @param inputSearch - The inputSearch parameter is a string that represents the CSS selector for the
 * input element used for searching.
 * @param selector - The `selector` parameter is a CSS selector that specifies the elements to be
 * filtered. It can be any valid CSS selector, such as a class name, an ID, or an element type.
 */

const searchFilter = (inputSearch, title) => {
  document.addEventListener("keyup", (e) => {
    // Check that the event comes from card search
    if (e.target.matches(inputSearch)) {
      if (e.key === "Escape") e.target.value = "";

      document.querySelectorAll(title).forEach((el) => {
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.parentNode.classList.remove("filter")
          : el.parentNode.classList.add("filter");
      });
    }
  });
};

export { searchFilter };

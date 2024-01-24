const url = "https://jsonplaceholder.typicode.com/users";

/**
 * The `createCard` function takes in a JSON array of objects, creates HTML cards based on the data,
 * and appends them to the DOM.
 * @param json - The `json` parameter is an array of objects. Each object represents a card with
 * information about a company or person. The objects have the following properties:
 */
const createCard = (json) => {
  const $root = document.getElementById("root");
  const $template = document.getElementById("template-info-card").content;
  const $fragment = document.createDocumentFragment();

  json.forEach((e) => {
    $template.querySelector(".info-card__company").textContent = e.company.name;
    $template.querySelector(".info-card__name").textContent = e.name;
    $template.querySelector(".info-card__phone").textContent = e.phone;
    $template.querySelector(".info-card__email").textContent = e.email;
    $template.querySelector(".info-card__website").textContent = e.website;
    $template
      .querySelector(".info-card__website")
      .setAttribute("href", e.website);

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });
  $root.appendChild($fragment);
};

/**
 * The function `loadUsers` fetches data from a specified URL and creates a card using the fetched JSON
 * data.
 * @param url - The `url` parameter is the URL of the API endpoint from which you want to load the
 * users' data.
 */
const loadUsers = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const json = await response.json();
      createCard(json);
    } else if (response.status === 404) console.error(`Error 404`);
  } catch (error) {
    console.info(error);
  }
};

loadUsers(url);

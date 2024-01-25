const url = "https://jsonplaceholder.typicode.com/photos";

const createPhotos = (json) => {
  const $root = document.getElementById("root");
  const $template = document.getElementById("template-photo-card").content;
  const $fragment = document.createDocumentFragment();

  json.forEach((e) => {
    $template.querySelector(".photo-card__img").setAttribute("alt", e.title);
    $template.querySelector(".photo-card__img").setAttribute("src", e.url);
    $template.querySelector(".photo-card__title").textContent = e.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });
  $root.appendChild($fragment);
};

const loadPhotos = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const json = await response.json();
      createPhotos(json);
    } else if (response.status === 404) {
      console.error("Error 404");
    }
  } catch (error) {
    console.info(error);
  }
};
loadPhotos(url);

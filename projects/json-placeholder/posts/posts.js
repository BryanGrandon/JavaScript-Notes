const url = "https://jsonplaceholder.typicode.com/posts";

const createPost = (json) => {
  const $root = document.getElementById("root");
  const $template = document.getElementById("template-post").content;
  const $fragment = document.createDocumentFragment();

  json.forEach((e) => {
    $template.querySelector(".post__title").textContent = e.title;
    $template.querySelector(".post__text").textContent = e.body;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });
  $root.appendChild($fragment);
};

const loadPost = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const json = await response.json();
      createPost(json);
    } else if (response.status === 404) {
      console.error("Error 404");
    }
  } catch (error) {}
};

loadPost(url);

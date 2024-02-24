"use strict";
const d = document;

const shape1 = () => {
  // Create and designate each required element.
  const $figure = d.createElement("figure");
  const $img = d.createElement("img");
  const $figcaption = d.createElement("figcaption");
  const $figcaptionText = d.createTextNode("Animal");

  //  Set the desired attributes for each element.
  $img.setAttribute("src", "https://");
  $img.setAttribute("alt", "animal");
  $figure.classList.add("class");

  // Set each created element as a child.
  $figcaption.appendChild($figcaptionText);
  $figure.appendChild($img);
  $figure.appendChild($figcaption);
};

const shape2 = () => {
  const $figure = d.createElement("figure");

  // Directly set the html and set it directly
  $figure.innerHTML = `
  <img src="https://cdn.pixabay.com/photo/2022/09/08/17/15/cafe-7441426_960_720.png" alt="Coffee" />
  <figcaption>Coffee</figcaption>
  `;
  $figure.classList.add("card");
};

// For multiple elements

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

const forMultipleElementsShape1 = (array, title) => {
  const $ul = d.createElement("ul");
  const $article = d.createElement("article");
  $article.innerHTML = `<h3>${title}</h3>`;

  array.forEach((e) => {
    const $li = d.createElement("li");
    $li.innerText = e;
    $ul.appendChild($li);
  });
  $article.appendChild($ul);
};
forMultipleElementsShape1(seasons, "Seasons");

// For multiple elements Shape 2

const continents = [
  "North America",
  "South America",
  "Europe",
  "Africa",
  "Asia",
  "Australia",
  "Antarctica",
];
const forMultipleElementsShape2 = (array, title) => {
  const $ul = d.createElement("ul");
  const $article = d.createElement("article");

  $article.innerHTML = `<h3>${title}</h3>`;
  $article.appendChild($ul);
  $container.appendChild($article);

  array.forEach((e) => {
    $ul.innerHTML += `<li>${e}</li>`;
  });
};
forMultipleElementsShape2(continents, "Continents");

// For multiple elements Shape 3

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const forMultipleElementsShape3 = (array, title) => {
  const $ul = document.createElement("ul");
  const $article = document.createElement("article");
  const $fragment = document.createDocumentFragment();
  $article.innerHTML = `<h3>${title}</h3>`;

  array.forEach((e) => {
    const $li = d.createElement("li");
    $li.textContent = e;
    $fragment.appendChild($li);
  });

  $ul.appendChild($fragment);
  $article.appendChild($ul);
};
forMultipleElementsShape3(months, "Months");

// Insert elements in the dom

const $template = document.getElementById("template").content;
const $fragment = document.createDocumentFragment();

const cardsContent = [
  {
    title: "Technology",
    img: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg",
  },
  {
    title: "Animals",
    img: "https://cdn.pixabay.com/photo/2020/06/20/11/08/siamese-cat-5320568_960_720.jpg",
  },
  {
    title: "Architecture",
    img: "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg",
  },
  {
    title: "People",
    img: "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg",
  },
  {
    title: "Nature",
    img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
  },
];
cardsContent.forEach((e) => {
  $template.querySelector("img").setAttribute("src", e.img);
  $template.querySelector("img").setAttribute("alt", e.title);
  $template.querySelector("figcaption").textContent = e.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

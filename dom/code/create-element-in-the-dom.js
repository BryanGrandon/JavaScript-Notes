"use strict";

const d = document;
const $container = d.querySelector(".container");

// ---- Shape 1 ---- //

// Create and designate each required element.

const $figureShape1 = d.createElement("figure");
const $img = d.createElement("img");
const $figcaptionShape1 = d.createElement("figcaption");
const $figcaptionShape1Text = d.createTextNode("Animal");

//  Set the desired attributes for each element.

$img.setAttribute("src", "https://");
$img.setAttribute("alt", "animal");

$figureShape1.classList.add("class");

// Set each created element as a child.

$figcaptionShape1.appendChild($figcaptionShape1Text);
$figureShape1.appendChild($img);
$figureShape1.appendChild($figcaptionShape1);

$container.appendChild($figureShape1);

// ---- Shape 2 ---- //

const $figureShape2 = d.createElement("figure");

// Directly set the html and set it directly

$figureShape2.innerHTML = `
<img src="https://cdn.pixabay.com/photo/2022/09/08/17/15/cafe-7441426_960_720.png" alt="Coffee" />
<figcaption>Coffee</figcaption>
`;

$figureShape2.classList.add("card");
$container.appendChild($figureShape2);

// -------- For multiple elements -------- //

// ---- Shape 1 ---- //

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

const $ul = d.createElement("ul");
const $article = d.createElement("article");

$article.innerHTML = `<h3>Seasons</h3>`;
$article.appendChild($ul);
$container.appendChild($article);

seasons.forEach((e) => {
  const $li = d.createElement("li");
  $li.innerText = e;
  $ul.appendChild($li);
});

// ---- Shape 2 ---- //

const continents = [
  "North America",
  "South America",
  "Europe",
  "Africa",
  "Asia",
  "Australia",
  "Antarctica",
];

const $ul2 = d.createElement("ul");
const $article2 = d.createElement("article");

$article2.innerHTML = `<h3>Continents</h3>`;
$article2.appendChild($ul2);
$container.appendChild($article2);

continents.forEach((e) => {
  $ul2.innerHTML += `<li>${e}</li>`;
});

// ---- Shape 3 ---- //

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

const $ul3 = document.createElement("ul");
const $article3 = document.createElement("article");
const $fragment = document.createDocumentFragment();

$article3.innerHTML = `<h3>Month</h3>`;
$container.appendChild($article3);

months.forEach((e) => {
  const $li = d.createElement("li");
  $li.textContent = e;
  $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
$article3.appendChild($ul3);

// Insert elements in the dom //

const $template = document.getElementById("template").content;
const $fragment2 = document.createDocumentFragment();

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
  $fragment2.appendChild($clone);
});

$container.appendChild($fragment2);

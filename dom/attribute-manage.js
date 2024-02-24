"use strict";
const $link = document.querySelector(".link");

const $hasAttribute = $link.hasAttribute("href");
const $getAttribute = $link.getAttribute("href");

$link.setAttribute("href", "https://pixabay.com/");
$link.toggleAttribute("target", "_blank");
$link.removeAttribute("target");

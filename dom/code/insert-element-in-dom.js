"use strict";

let text = `
<p>The different ways to insert text from <mark>JavaScript</mark> to <mark>HTML</mark>.</p>

<ul>
    <li>.innerText</li>
    <li>.textContent</li>
    <li>.innerHTML</li>
    <li>.outerHTML</li>
</ul>

`;

const d = document;

// -------- Set content -------- //

// innerText // Respecting the blank spaces
const $element1 = d.querySelector(".inner-text");
$element1.innerText = text;

// textContent // Does not respect blank spaces
const $element2 = d.querySelector(".text-content");
$element2.textContent = text;

// -------- Set HTML -------- //

// innerHTML // Inside element
const $element3 = d.querySelector(".outer-html");
$element3.innerHTML = text;

// outerHTML // Element replacement
const $element4 = d.querySelector(".inner-html");
$element4.outerHTML = text;

"use strict";
const d = document;
let text = `
<p>The different ways to insert text from <mark>JavaScript</mark> to <mark>HTML</mark>.</p>

<ul>
    <li>.innerText</li>
    <li>.textContent</li>
    <li>.innerHTML</li>
    <li>.outerHTML</li>
</ul>

`;

// Set content

const $element1 = d.querySelector(".inner-text");
const $element2 = d.querySelector(".text-content");

$element1.innerText = text; // innerText
$element2.textContent = text; // textContent

// Set HTML
const $element3 = d.querySelector(".outer-html");
const $element4 = d.querySelector(".inner-html");

$element3.innerHTML = text; // innerHTML
$element4.outerHTML = text; // outerHTML

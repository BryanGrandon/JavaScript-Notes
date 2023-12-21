"use strict";
const d = document;
const $link = d.querySelector(".link");

// -------- hasAttribute(attr) -------- //
// Indicates whether the element has the HTML attr attribute.

const $hasAttribute = $link.hasAttribute("href");

// -------- getAttribute(attr) -------- //
// Returns the value of the attr attribute of the element or null if it does not exist.

const $getAttribute = $link.getAttribute("href");

// -------- setAttribute(attr, value) -------- //
// Adds or changes the attr attribute to the value value of the HTML element.

$link.setAttribute("href", "https://pixabay.com/");

// -------- toggleAttribute(attr, forge) -------- //
// Adds attr attribute if it does not exist, if it does exist, removes it.

$link.toggleAttribute("target", "_blank");

// -------- removeAttribute(attr) -------- //
// Removes the attr attribute from the HTML element.

$link.removeAttribute("target");

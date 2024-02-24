"use strict";

const $element = document.querySelector(".element");

// How many classes the element has.
let classLength = $element.classList.length;

// Indicates whether it contains the indicated class.
let classContains = $element.classList.contains("style-1");

// ---- Actions ---- //

$element.classList.add("style-1");
$element.classList.remove("style-2");
$element.classList.toggle("style-2");
$element.classList.replace("style-1", "style-3");

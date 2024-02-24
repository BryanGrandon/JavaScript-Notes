"use strict";
const $element = document.querySelector(".element");

$element.style.setProperty("border", "1px solid #000");
$element.style.setProperty("background-color", "mediumPurple");

let computedStyle = getComputedStyle($element);
let elementValue = computedStyle.getPropertyValue("color");

// -------- CSS variables -------- //

const $html = document.documentElement;

let color = "#ccf"; // Change the value of the variable
$html.style.setProperty("--bg-color", color);

let $bgColor = getComputedStyle($html).getPropertyValue("--bg-color");
$element.style.setProperty("background-color", $bgColor);
$element.style.setProperty("color", "var(--bg-color)"); // Assign variable

"use strict";
const $element = document.querySelector(".element");

/*/ setProperty(property css, value) //
      setProperty allows us to set css properties properties to the
*/
$element.style.setProperty("border", "1px solid #000");
$element.style.setProperty("background-color", "mediumPurple");

/*/ getComputedStyle(element) //
      setProperty allows us to set css properties
*/
let computedStyle = getComputedStyle($element);

/*/ getPropertyValue(property css) //
      getPropertyValue allows us to get the value of the specified css property
*/
let elementValue = computedStyle.getPropertyValue("color");

// -------- CSS variables -------- //

const $html = document.documentElement;

// Change the value of the variable
let color = "#ccf";
$html.style.setProperty("--bg-color", color);

let $bgColor = getComputedStyle($html).getPropertyValue("--bg-color");
$element.style.setProperty("background-color", $bgColor);

// Assign variable
$element.style.setProperty("color", "var(--bg-color)");

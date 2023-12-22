"use strict";

const $element = document.querySelector(".element");

// ---- Length ---- //
// How many classes the element has.

let classLength = $element.classList.length;

// ---- Contains ---- //
// Indicates whether it contains the indicated class.

let classContains = $element.classList.contains("style-1");

// ---- Actions ---- //

// Adds the classes to the HTML element.
$element.classList.add("style-1");

// Removes the classes from the HTML element.
$element.classList.remove("class-delete");

// If the class does not exist, it adds it. If not, it deletes it.
$element.classList.toggle("style-2");

// Replaces the old class with the new class.
$element.classList.replace("replace", "style-3");

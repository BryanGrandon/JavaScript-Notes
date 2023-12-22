"use strict";

const $element = document.querySelector(".cards");

// ---- Element Children ---- //

const $children = $element.children;

const $firstElementChild = $element.firstElementChild;
const $lastElementChild = $element.lastElementChild;

// ---- Element Brother ---- //

const parentElement = $element.parentElement;

const previousElementSibling = $element.previousElementSibling;
const nextElementSibling = $element.nextElementSibling;

// ---- Get nearest parent element ---- //

const $parent = $element.children[1].closest("section");

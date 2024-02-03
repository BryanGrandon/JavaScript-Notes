# Document Object Model

In Javascript, when we refer to the Document Object Model ( DOM ) we refer to this tree structure, through which we can access it and modify the HTML elements from Javascript.

## _Table of content_

- [Document](#document)
- [Select DOM element](#select-dom-element)
- [Attributes manage](#attributes-manager)
- [Styles and classes](#styles-and-classes)
- [Insert element in DOM](#insert-element-in-dom)
- [Walking the DOM](#walking-the-dom)
- [Create element in the DOM](#create-element-in-the-dom)
- [Modifying elements](#modifying-elements)
- [Event handler](#event-handler)

## _Document_

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content.

```js
// In Javascript, the way to access the DOM is through an object called document
const wd = window.document;
const d = document;

// To access HTML tags
const head = document.head;
const html = document.documentElement;
const title = document.title;

// Create an array with all the links, images, from.
const links = document.links;
const images = document.images;
const form = document.forms;

// Access external document
const css = document.styleSheets;
const js = document.scripts;
```

## _Select DOM element_

The ways to [select a DOM element](/dom/code/select-dom-element.js) is by using different methods for each situation or occasion.

```js
// getElementById()
const $id = document.getElementById("id");

// querySelector()
const $class = document.querySelector(".class");

// querySelectorAll()
const $allClass = document.querySelectorAll(".classes");
```

## _Attributes manager_

With the [attribute manager](/dom/code/attribute-manage.js) methods we can obtain or modify the attributes of an element.

```js
// hasAttribute(attr):
const $hasAttribute = $link.hasAttribute("href");

// getAttribute(attr)
const $getAttribute = $link.getAttribute("href");

// setAttribute(attr, value)
$link.setAttribute("href", "https://pixabay.com/");

// toggleAttribute(attr, forge)
$link.toggleAttribute("target", "_blank");

// removeAttribute(attr)
$link.removeAttribute("target");
```

## _Styles and classes_

The [classList](/dom/code/styles-and-classes/class-list.js) property allows us to modify the class of the item

```js
// classList.add()
$element.classList.add("style-1");

// classList.remove()
$element.classList.remove("style-2");

// classList.toggle()
$element.classList.toggle("style-2");

// classList.replace("replace", "new-class")
$element.classList.replace("style-1", "style-3");
```

We can [Style variables](/dom/code/styles-and-classes/style-variables.js) using several methods for obtaining and setting CSS properties

```js
// setProperty( property-css, value )
$element.style.setProperty("border", "1px solid #000");

// getComputedStyle( element )
let computedStyle = getComputedStyle($element);

// getPropertyValue( property-css )
let elementValue = computedStyle.getPropertyValue("color");
```

## _Insert element in DOM_

The different ways to [insert text](/dom/code/insert-element-in-dom.js) from JavaScript to HTML.

```js
// innerText
$element1.innerText = text;

// textContent
$element2.textContent = text;

// innerHTML
$element3.innerHTML = text;

// outerHTML
$element4.outerHTML = text;
```

## _[Walking the DOM](/dom/code/walking-the-dom.js)_

The DOM allows us to do anything with elements and their contents, bt first we need to reach the corresponding DON object.

```js
// Children
const $children = $element.children;

const $firstElementChild = $element.firstElementChild;
const $lastElementChild = $element.lastElementChild;

// Brother
const parentElement = $element.parentElement;

const previousElementSibling = $element.previousElementSibling;
const nextElementSibling = $element.nextElementSibling;

// Get nearest parent element
const $parent = $element.children[1].closest("section");
```

## _Create element in the DOM_

[Create element in the DOM](/dom/code/create-element-in-the-dom.js) for this there are several methods to effectively create different elements or HTML nodes.

```js
// createElement()
const $section = document.createElement("section");

// createTextNode()
const $sectionText = document.createTextNode("Animal");

// appendChild()
$container.appendChild($section);

// createDocumentFragment()
const $fragment = document.createDocumentFragment();

// importNode
let $clone = document.importNode($template, true);
```

## _Modifying elements_

- .insertAdjacentElement( position, element )
- .insertAdjacentHTML( position, html )
- .insertAdjacentText( position, text )
- Position :
  - Previous brother ( beforebegin )
  - Next brother ( afterend )
  - First son ( afterbegin )
  - Last son ( beforeend )

## _Event handler_

[Events](/dom/code/event-handler.js) are signals fired inside the browser window that notify of changes in the browser or operating system environment.

- Event whit attribute (onclick="" in HTML)
- Event with semantic handler
- Multiple events
- Event whit parameter
- Remove event
- Event delegation

## _Browser Object Model_

[The Browser Object Model ( BOM )](/dom/code/bom.js) is a collection of objects exposed by the browser that allow JavaScript to interact with the browser window, document, and other browser-specific functionalities.

- resize
- scroll
- load
- DOMContentLoaded
- LocationURL
- historyObj
- navigatorObj

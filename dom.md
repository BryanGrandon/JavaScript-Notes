# Document Object Model

In Javascript, when we refer to the Document Object Model ( DOM ) we refer to this tree structure, through which we can access it and modify the HTML elements from Javascript.

## Table of content

- [Document](#document)
- [Select DOM element](#select-dom-element)
- [Attributes manage](#attributes-manager)
- [Class List](#classlist)
- [Style variables](#style-variables)
- [Insert element in DOM](#insert-element-in-dom)
- [Walking the DOM](#walking-the-dom)
- [Create element in the DOM](#create-element-in-the-dom)
- [Modifying elements](#modifying-elements)
- [Event handler](#event-handler)
- [Browser Object Model](#browser-object-model)

## Document

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content.

In Javascript, the way to access the DOM is through an object called document

```js
const wd = window.document
const d = document
```

- To access HTML tags
- Create an array with all the links, images, from.
- Access external document

## Select DOM element

The ways to select a DOM element is by using different methods for each situation or occasion.

- Select an element that has an id attribute.
- Select an element that has a name in the class attribute.
- Select multiple elements that have a common name in the class attribute.

## Attributes manager

With the attribute manager methods we can obtain or modify the attributes of an element.

- hasAttribute(attr).
- getAttribute(attr).
- setAttribute(attr, value).
- toggleAttribute(attr, value).
- removeAttribute(attr).

## ClassList

The `classList` property allows us to modify the class of the item.

- Adds the classes to the HTML element. `add`
- Removes the classes from the HTML element. `remove`
- If the class does not exist, it adds it. If not, it deletes it. `toggle`
- Replaces the old class with the new class. `replace`

## [Style variables](/dom/style-variables.js)

We can style variables using several methods for obtaining and setting CSS properties

- setProperty(propertyCSS, value).
- getComputedStyle($element).
- getPropertyValue(propertyCSS).

## [Insert element in DOM](/dom/insert-element-in-dom.js)

The different ways to insert text from JavaScript to HTML.

### _Set Content_

- `innerText`: Respecting the blank spaces
- `textContent` : Does not respect blank spaces

### _Set HTML_

- `innerHTML`: Inside element
- `outerHTML`: Element replacement

## Walking the DOM

The DOM allows us to do anything with elements and their contents, bt first we need to reach the corresponding DON object.

```js
// Children
const $children = $element.children

const $firstChild = $element.firstElementChild
const $lastChild = $element.lastElementChild
```

```js
// Brother
const $parent = $element.parentElement

const $previousSibling = $element.previousElementSibling
const $nextSibling = $element.nextElementSibling
```

```js
// Get nearest parent element
const $parent = $element.children[1].closest('section')
```

## [Create element in the DOM](/dom/create-element-in-the-dom.js)

Create element in the DOM for this there are several methods to effectively create different elements or HTML nodes.

```js
// Method creates the HTML element specified by tagName,
document.createElement(tagName)

// Create a new text node
document.createTextNode(text)

// Adds a node to the end of the list of children of a specified parent node.
parent.appendChild(child)

// Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.
const $fragment = document.createDocumentFragment()

// The  method creates a copy of a Node or DocumentFragment from another document.
let $clone = document.importNode($template, true)
```

## Modifying elements

```js
$container.insertAdjacentElement(position, element)
$container.insertAdjacentHTML(position, html)
$container.insertAdjacentText(position, text)
```

| Position      |                  |
| ------------- | ---------------- |
| `beforebegin` | Previous brother |
| `afterend`    | Next brother     |
| `afterbegin`  | First son        |
| `beforeend`   | Last son         |

## [Event handler](/dom/event-handler.js)

Events are signals fired inside the browser window that notify of changes in the browser or operating system environment.

- Event whit attribute (onclick="" in HTML).
- Event with semantic handler.
- Multiple events.
- Remove event.
- Event delegation

## [Browser Object Model](/dom/bom.js)

The Browser Object Model ( BOM ) is a collection of objects exposed by the browser that allow JavaScript to interact with the browser window, document, and other browser-specific functionalities.

- resize
- scroll
- load
- DOMContentLoaded
- LocationURL
- historyObj
- navigatorObj

# Document Object Model

In Javascript, when we refer to the Document Object Model ( DOM ) we refer to this tree structure, through which we can access it and modify the HTML elements from Javascript.

## _Table of content_

- [Document](#document)
- [Select DOM element](#select-dom-element)
- [Manage DOM attributes](#manager-dom-attributes)
- [Styles and classes](#styles-and-classes)
- [Insert element in DOM](#insert-element-in-dom)
- [Walking the DOM](#walking-the-dom)
- [Create element in the DOM](#create-element-in-the-dom)

## _[Document](/dom/code/document.js)_

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

- Document
- HTML tags
- External document

## _[Select DOM element](/dom/code/select-dom-element.js)_

There are a number of methods that allow us to search the DOM of the page and find these elements.

- getElementById()
- querySelector()
- querySelectorAll()

## _[Manager DOM attributes](/dom/code/manage-dom-attribute.js)_

All attributes are accessible by using the following methods:

- hasAttribute(attr)
- getAttribute(attr)
- setAttribute(attr, value)
- removeAttribute(attr)

## _Styles and classes_

### className

The className property of the element interface gets and sets the value of the class attribute of the specified element.

- className

### [classList](/dom/code/styles-and-classes/class-list.js)

classList is a special object with methods to add, remove and toggle a single class.

- classList.add()
- classList.remove()
- classList.toggle()
- classList.replace("replace", "new-class")

### [Style in variables](/dom/code/styles-and-classes/style-in-variables.js)

To get and set the variables with JavaScript, we can use various methods.

- setProperty( property-css, value )
- getComputedStyle( element )
- getPropertyValue( property-css )

## _[Insert element in DOM](/dom/code/insert-element-in-dom.js)_

The different ways to insert text from JavaScript to HTML.

- innerText
- textContent
- innerHTML
- outerHTML

## _[Walking the DOM](/dom/code/walking-the-dom.js)_

The DOM allows us to do anything with elements and their contents, bt first we need to reach the corresponding DON object.

- Children
- Brother
- Get nearest parent element

## _[Create element in the DOM](/dom/code/create-element-in-the-dom.js)_

There are a number of methods for efficiently creating different HTML elements or nodes.

- createElement()
- createTextNode()
- appendChild()
- createDocumentFragment()
- importNode

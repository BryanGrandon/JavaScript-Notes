# Document Object Model

In Javascript, when we refer to the **_Document Object Model_** ( DOM ) we refer to this tree structure, through which we can access it and modify the HTML elements from Javascript.

## _Table of content_

- [The subject document](#the-subject-document)

## _The subject document_

In Javascript, the way to access the DOM is through an object called document.

```JS
// Document
const wd = window.document;
const d = document;

// Tags html
const head = document.head;
const body = document.body;
const html = document.documentElement;
const title = document.title;

// Links, Images, Forms
const links = document.link;
const images = document.image;
const form = document.form;

// css and js
const css = document.styleSheets;
const js = document.scripts;
```

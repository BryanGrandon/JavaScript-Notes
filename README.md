# JavaScript Notes

JavaScript is an interpreted programming language used on the client-side (front-end) to provide dynamic and interactive enhancements to web pages.

- [DOM Manipulation](/docs/dom.md)

  The Document Object Model (DOM) is a programming interface built for HTML and XML documents. It represents the page that allows programs and scripts to dynamically update the document structure, content, and style.

- [APIs](/docs/api.md)

  API is a piece of code that allows different applications to communicate with each other and share information and functionality.

## Table of content

- [General Information](#general-information)
- [Data Types](/docs/code/data-types.md)
- [Data Structure](/docs/code/data-structure.md)
- [Loops and Iterations](/docs/code/07-loops-and-iterations.md)
- [Control flow](/docs/code/08-control-flow.md)
- [Operator](/docs/code/09-operator.md)
- [Function](/docs/code/10-function.md)
- [Using (this) keyword](/docs/code/12-using-this-keyword.md)
- [Asynchronous JavaScript](/docs/code/13-asynchronous.md)
- [Classes](/docs/code/14-classes.md)
- [Generator](/docs/code/15-generator.md)
- [Regular Expressions](/docs/code/16-regular-expressions.md)
- [Modules](/docs/code/17-modules.md)

## General Information

### All about variables

The variable is the way to store a value so that it can be reused, updated or simply registered. To declare a variable in JavaScript you can use `var`, `let` and `const`.

<dl>
  <dt>Hoisting</dt>
  <dd>
    Hoisting is a behavior in JavaScript in which variable and function declarations are moved to the beginning of the scope they are in.
  </dd>
</dl>

### Equality comparisons

Comparison operators are used in logical statements to determine equality or
difference between variables or values. Is Loosely Equal ( `==` ), is Strictly Equal ( `===` ), same Value ( `Object.is()` ).

```js
let looselyEqual = 2 == "2"; // true
let strictlyEqual = 2 === "2"; // false
let sameValue = ; Object.is(2, 2) // true
```

### Strict mode

Strict mode applies to an entire script or to individual functions. To invoke strict mode on a
whole script, type exactly `"use strict";` before any other expression.

It enforces stricter parsing and error handling on the code at runtime. It also helps you write
cleaner code and catch errors and bugs that might otherwise go unnoticed.

```JS
"use strict";
// code
```

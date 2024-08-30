# General Information

## What is JavaScript ?

JavaScript is a programming language that developers use to make interactive web pages.

## All about variables

The variable is the way to store a value so that it can be reused, updated or simply registered. To declare a variable in JavaScript you can use `var`, `let` and `const`.

### Hoisting

Hoisting is a behavior in JavaScript in which variable and function declarations are moved to the beginning of the scope they are in.

## Equality comparisons

Comparison operators are used in logical statements to determine equality or
difference between variables or values. Is Loosely Equal ( `==` ), is Strictly Equal ( `===` ), same Value ( `Object.is()` ).

```js
let looselyEqual = 2 == "2"; // true
let strictlyEqual = 2 === "2"; // false
let sameValue = ; Object.is(2, 2) // true
```

## Strict mode

Strict mode applies to an entire script or to individual functions. To invoke strict mode on a
whole script, type exactly `"use strict";` before any other expression.

It enforces stricter parsing and error handling on the code at runtime. It also helps you write
cleaner code and catch errors and bugs that might otherwise go unnoticed.

```JS
"use strict";
// code
```

[📒 Back to main note.📒](/README.md)

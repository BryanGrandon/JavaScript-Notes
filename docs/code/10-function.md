# Function

Functions exist so that we can reuse code. They are blocks of code that are executed each time they are invoked. Each function is usually written to perform a specific task.

```js
// Function expressions
const anonymousFunction = function () {};
```

```js
// Arrow Function
const arrowFunction = () => {};
```

```js
// Immediately Invoked Function Expression
(function () {})();
```

[Methods](/code/10-function/function.js)

## Scope and Function stack

A space or environment in which a particular variable or function can be accessed or used. Accessibility of this variable or function depends on where it is defined.

```js
// Closures -> Calling a function inside another function.
function displayName() {}
function init() {
  displayName();
}
```

```js
// Lexical Scoping -> Declaring a function inside another function and calling it.
function lexical() {
  function scoping() {}
}
```

```js
// Recursion -> The function is able to call itself.
function recursion() {
  recursion();
}
```

[Methods](/code/10-function/scope-and-function-stack.js)

---

[📒 Back to main note.📒](/README.md)

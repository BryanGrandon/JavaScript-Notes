# Control flow

Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.

## Conditional statements

Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. They can be `if...else` and `Switch`.

```js
if (conditional) {
  // Code to execute
} else {
  // Code to execute
}

switch (option) {
  case 1:
    // Code to execute
    break;
  case 2:
    // Code to execute
    break;
}
```

[Methods](/code/08-control-flow/conditional-statements.js)

## Exception handling

The code in the `try` block is executed first, and if it throws an exception, the code in the `catch` block will be executed.

```js
try {
  // Code to execute
} catch (error) {
  // Code to execute
}
```

[Methods](/code/08-control-flow/exception-hendling.js)

[Proxies](/code/08-control-flow/proxies.js) allow you to modify, validate, or override the fault behavior

---

[📒 Back to main note.📒](/README.md)

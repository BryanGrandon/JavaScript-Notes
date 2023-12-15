# JavaScript

An interpreted programming language used on the client side (front-end) to provide dynamic and interactive enhancements to web pages.

## _Table of content_

- [Introduction](#introduction)
- [All about variables](#all-about-variables)

## _Introduction_

This project is to have a record of what i have learned about JavaScript.

## _All about variables_

To store and represent this information in the JavaScript codebase, we use variables. A variable is a container for a value.

### [Variable Declaration](/code/all-about-variables/variable-declaration.js)

To use variables in JavaScript, you need to declare them using one of the keywords `var`, `let`, `const`

```JS
var nameVar = "Value Var";
let nameLet = "Value Let";
const nameConst = "Value Const";
```

### Hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears
to move the declaration of functions, variables, or classes to the top
of their scope, prior to execution of the code.

**Lexical environment:** Stores variables and functions in memory.

**Temporal Dead Zone:** Cannot access "variables" before initialization.

### [Variable Scope](/code/all-about-variables/variable-scope.js)

In JavaScript, scope refers to the visibility of a variable or how it can be used after it is declared. The scope of a variable depends on the keyword that was used to declare it.

**Global Scope:** It can be accessed from anywhere within the same JavaScript code.

**Function scope:** Variables declared inside a function can only be used.

**Block scope:** Variables declared within a block cannot be accessed outside.

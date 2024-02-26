# JavaScript Notes

This project is to have a record of what I have learned about JavaScript. Also to add or update content already seen to make it more readable.

- [Document Object Model (DOM)](/docs/dom.md)
- [Application Programming Interface (APIs)](/docs/api.md)
- [Projects](/docs/projects.md)
- [Typescript](/docs/typescript.md)

## Table of content

- [What is Javascript](#what-is-javascript)
- [All about variables](#all-about-variables)
- [Data Types](#data-types)
- [Type casting](#type-casting)
- [Data Structure](#data-structure)
- [Equality comparisons](#equality-comparisons)
- [Loops and Iterations](#loops-and-iterations)
- [Control flow](#control-flow)
- [Operator](#operator)
- [Function](#function)
- [Strict mode](#strict-mode)
- [Using (this) keyword](#using-this-keyword)
- [Asynchronous JavaScript](#asynchronous-javascript)
- [Classes](#classes)
- [Generator](#generator)
- [Regular Expressions](#regular-expressions)
- [Modules](#modules)

## What is JavaScript?

JavaScript is a programming language that developers use to make interactive web pages.

## All about variables

A variable in JavaScript is this programming language's way of naming a value so that it can be reused, updated or simply registered. To declare a variable you have to use keywords such as `var`, `let` and `const` these will have different scope.

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the beginning of the scope they are in, before other lines of code in the same scope are executed.

[⬆️ Table of content ⬆️](#table-of-content)

## Data Types

We refer to the data types that we can assign to JavaScript variables. Furthermore, data types are divided into two groups, which are primitive types and objects.

### _[Primitive type](/code/data-type/primitive-type.js)_

Primitive type is data that is not an object and has no methods or properties.

```js
let string = "Way of writing string";

let number = 25;

let bigInt = 9007199254740992n;

let boolean = [true, false];

let null = ["Nothing", "Empty"];

let isUndefined;

let symbol = Symbol("id");
```

### _[Object](/code/data-type/object.js)_

The JavaScript object is a data structure that allows us to have key-value pairs.

```js
const object = {
  key: "value",
};

// Methods
object.keyName = "value"; // Add
delete object.keyName; // Delete
let access = object.key; // Access
let existingProperty = "key" in object; // Existing Property
```

The build in object are [Console object](/code/data-type/console.js), [Date object](/code/data-type/date.js), [Math object](/code/data-type/math.js).

[⬆️ Table of content ⬆️](#table-of-content)

## Type casting

Type conversion means the transfer of data from one data type to another.

```js
// Explicit Type Casting.
let number = parseInt("25.5");
let float = parseFloat("25.5");
let string = number.toString();
```

```js
// Implicit Type Casting.
let numberOrString = "4" - "2";
```

```js
// Type Conversions.
String();
Number();
Boolean();
```

[⬆️ Table of content ⬆️](#table-of-content)

## Data Structure

A Data structure is a format to organize, manage and store data in a way that allows efficient

### _[Array](/code/data-structure/array.js)_

The Array it stores multiple values and elements in one variable.

```js
let arr = ["Element 1", "Element 2", "Element 3"];
let element1 = arr[0]; // Access to element
```

### _[Keyed Collection](/code/data-structure/keyed-collection.js)_

Keyed Collection are data collections that are ordered by key not index.

```js
// Maps are used to store a collection of elements defined by a key and value
let map = new map();

// Sets allow us to store collections of information, specifically values that will not be repeated.
let set = new set();
```

### _[JavaScript Object Notion](/code/data-structure/json.js)_

JSON is a lightweight data interchange format, easy to read, write and parse for users and generate for machines.

```json
{
  "name": "Bryan",
  "age": 21,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "something": "undefined"
}
```

[⬆️ Table of content ⬆️](#table-of-content)

## Equality comparisons

Comparison operators are used in logical statements to determine equality or
difference between variables or values. Is **Loosely Equal** ( `==` ), is **Strictly Equal** ( `===` ), **same Value** ( `Object.is()` ).

[⬆️ Table of content ⬆️](#table-of-content)

## Loops and Iterations

Loops offer a quick and easy way to do something repeatedly. there are different ways to create a loop such as `for`, `do while` and `while`.

### _For_

```js
// for (initialization; condition; afterthought) { statement }
let str = "";
for (let i = 0; i <= 5; i++) {
  str += i;
}
```

### _While_

```js
// The condition is evaluated before executing the statement.
let i = 0;
while (i < 5) {
  i += 1; //so that it is not an infinite loop
}

// do Wile

// The condition is evaluated after executing the statement.
do {
  i += 1; //so that it is not an infinite loop
} while (i > 10);
```

Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement. <br/>
The continue statement can be used to restart a while, do-while, for, or label statement.

```js
// Break

for (let i = 0; i < 100; i++) {
  if (i === 5) break;
}

label: for (let i = 0; i < 5; i++) {
  for (let x = 1; x <= 3; x++) {
    if (x === 3) break label;
  }
}

// Continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
}
```

[⬆️ Table of content ⬆️](#table-of-content)

## Control flow

Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.

### _[Conditional statements](/code/control-flow/conditional-statements.js)_

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

### _[Exception handling](/code/control-flow/exception-hendling.js)_

The code in the `try` block is executed first, and if it throws an exception, the code in the `catch` block will be executed.

```js
try {
  // Code to execute
} catch (error) {
  // Code to execute
}
```

[Proxies](/code/control-flow/proxies.js) allow you to modify, validate, or override the fault behavior

[⬆️ Table of content ⬆️](#table-of-content)

## Operator

Operators allow you to manipulate the value of variables, perform mathematical operations with their values and compare different variables.

- [Arithmetic operator](/code/operator/arithmetic.js)
- [Comparison operator](/code/operator/comparison.js)
- [Logical operator](/code/operator/logical.js)
- [Ternary operator](/code/operator/ternary.js)

[⬆️ Table of content ⬆️](#table-of-content)

## [Function](/code/function/function.js)

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

### _Scope and Function stack_

A space or environment in which a particular variable or function can be accessed or used. Accessibility of this variable or function depends on where it is defined.

- [Closures](/code/function/closures.js).
- [Lexical Scoping](/code/function/lexical-scoping.js).
- [Recursion](/code/function/recursion.js).

[⬆️ Table of content ⬆️](#table-of-content)

## Strict mode

Strict mode applies to an entire script or to individual functions. To invoke strict mode on a
whole script, type exactly `"use strict";` before any other expression.

It enforces stricter parsing and error handling on the code at runtime. It also helps you write
cleaner code and catch errors and bugs that might otherwise go unnoticed.

```JS
"use strict";
// code
```

## [Using (this) keyword](/code/using-this-keyword.js)

In JavaScript, the this keyword is a little different compared to other languages. It refers to an object, but it depends on how or where it is being invoked. It also has some differences strict mode and non-strict mode.

- In anonymous function
- In arrow function
- Explicit binding

## Asynchronous JavaScript

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.

The **[setTimeout](/code/asynchronous/settimerout.js)** runs a function after the specified period expires. Times are declared in milliseconds.

```JS
// setTimeout (func|code, [delay], [arg1], [arg2], ...)
```

**[setInterval](/code/asynchronous/setinterval.js)** is similar to setTimeout, with one difference. Instead of executing the callback function once, it will execute it forever, at the specified time interval

```JS
// setInterval (func|code, [delay], [arg1], [arg2], ...)
```

**Event Loop**

- Synchronous: The synchronous operation you wait for the result..
- Asynchronous: The asynchronous operation does not wait for the result.

A [Callback](/code/asynchronous/callback.js) function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.

[Promises](/code/asynchronous/promise.js) are a much better way to work with asynchronous code in JavaScript than
the old and error-prone callback approach.

[Async / Await](/code/asynchronous/async-await.js) is a special syntax to work with promises in a more comfortable fashion. We use async keyword to declare a async function that return a Promise, and the await keyword makes a function wait for a Promise.

## [Classes](/code/classes/classes.js)

Classes are a template for creating objects. They encapsulate data with code to work on that data.

**[Getter Setter](/code/classes/getter-setter.js)**

```JS
// Getter, the code executed to get obj.propName
get fullName() {
    return `${this.name} ${this.lastName}`;
  },
// Setter, the code executed to set obj.propName = value
set fullName(value) {
  [this.name, this.lastName] = value.split(" ");
},
```

In programming, [inheritance](/code/classes/inheritance.js) refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.

**[Additional](/code/classes/additional.js)**

- Protected properties are usually prefixed with the underscore \_.
- Privates should start with #. They are only accessible from inside the class.

**[Prototype](/code/classes/prototype.js)**

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

## [Generator](/code/generator.js)

Iterators are objects, governed by the iterator protocol, that allow us to easily iterate
over a given sequence in a variety of ways, such as using the for...of loop.

## Regular Expressions

[Regular expressions](/code/regular-expressions.js) are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.

- Assertions
- Quantifiers
- Character sets
- Groups and Ranks

## Modules

Modules encapsulate all sorts of code like functions and variables and expose all this to other files.

The [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) declaration is used to export values from a JavaScript module.

The [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) syntax, commonly called dynamic import, is a function-like expression that allows loading an ECMAScript modules asynchronously and dynamically into a potentially non-module environment.

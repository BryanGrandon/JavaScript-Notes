# JavaScript Notes

JavaScript is an interpreted programming language used on the client-side (front-end) to provide dynamic and interactive enhancements to web pages.

- [DOM Manipulation](/docs/dom.md)

  The Document Object Model (DOM) is a programming interface built for HTML and XML documents. It represents the page that allows programs and scripts to dynamically update the document structure, content, and style.

- [APIs](/docs/api.md)

  API is a piece of code that allows different applications to communicate with each other and share information and functionality.

## Table of content

- [General Information.](#general-information)
- [Data Types.](#data-type)
- [Data Structure.](#data-structure)
- [Loops and Iterations.](#loops-and-interactions)
- [Control flow](/docs/code/08-control-flow.md)
- [Operator](/docs/code/09-operator.md)
- [Function](/docs/code/10-function.md)
- [Using (this) keyword](/docs/code/12-using-this-keyword.md)
- [Asynchronous JavaScript](/docs/code/13-asynchronous.md)
- [Classes](/docs/code/14-classes.md)
- [Generator](/docs/code/15-generator.md)
- [Regular Expressions](/docs/code/16-regular-expressions.md)
- [Modules](/docs/code/17-modules.md)

## General information

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

## Data type

JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

1. [Primitive data types](/code/data-types/primitive-type.js)

   All types except Object define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.

   ```js
   let string = "text string";
   let number = 21;
   let bigInt = 22212121213423412312n;
   let boolean = [true, false];
   let isNull = null;
   let isUndefined;
   let symbol = Symbol();
   ```

2. Non-primitive data type (object)

   In computer science, an object is a value in memory which is possibly referenced by an identifier. In JavaScript, objects are the only mutable values. Functions are, in fact, also objects with the additional capability of being callable.

   - [Object.](/code/data-types/object-type.js)
   - Array.
   - Maps.
   - WeakMaps.
   - Sets.
   - WeakSets.
   - [Console.](/code/data-types/build-in/console.js)
   - [Date.](/code/data-types/build-in/date.js)
   - [Math.](/code/data-types/build-in/math.js)

### [Type conversion](/code/data-types/type-conversion.js)

Type conversion means the transfer of data from one data type to another.

- Explicit type casting
- Implicit Type Casting
- Type Conversions

## Data structure

In computer science, a data structure is a format to organize, manage and store data in a way that allows efficient access and modification.

- [Array](/code/data-structure/array.js)

  The Array it stores multiple values and elements in one variable.

  ```js
  let arr = ["Element 1", "Element 2", "Element 3"];
  ```

- [Keyed collection](/code/data-structure/keyed-collection.js)

  Keyed Collection are data collections that are ordered by key not index.

  ```js
  let map = new map();
  let set = new set();
  ```

- [JavaScript object notion (JSON)](/code/data-structure/json.js)

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

## Loops and interactions

Loops offer a quick and easy way to do something repeatedly. There are different ways to create a loop.

- `for`

  Creates a loop consisting of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in a loop.

  ```js
  // for (initialization; condition; afterthought) { statement }

  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  ```

- `while`

  Creates a loop that executes a specified statement as long as a certain condition evaluates to true. This condition is evaluated before executing the statement.

  ```js
  let i = 0;
  while (i < 5) {
    i += 1; //so that it is not an infinite loop
  }
  ```

  - Use the `break` statement to terminate a loop, switch, or in conjunction with a labeled statement.
  - The `continue` statement can be used to restart a while, do-while, for, or label statement.

- `do while`

  The do...while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated after executing the statement

  ```js
  let i = 0;
  do {
    i += 1; //so that it is not an infinite loop
  } while (i > 10);
  ```

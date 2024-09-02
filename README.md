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
- [Control flow](#control-flow)
- [Operator](#operator)
- [Function](#function)
- [Using (this) keyword](#using-this-keyword)
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

- The [Array](/code/data-structure/array.js) it stores multiple values and elements in one variable.

  ```js
  let arr = ["Element 1", "Element 2", "Element 3"];
  ```

- [Keyed collection](/code/data-structure/keyed-collection.js)
  are data collections that are ordered by key not index.

  ```js
  let map = new map();
  let set = new set();
  ```

- [JavaScript object notion (JSON)](/code/data-structure/json.js)
  is a lightweight data interchange format, easy to read, write and parse for users and generate for machines.

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

- The `for` statement creates a loop consisting of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in a loop.

  ```js
  // for (initialization; condition; afterthought) { statement }
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  ```

- The `while` statement creates a loop that executes a specified statement as long as a certain condition evaluates to true. This condition is evaluated before executing the statement.

  ```js
  let i = 0;
  while (i < 5) {
    i += 1; //so that it is not an infinite loop
  }
  ```

  - Use the `break` statement to terminate a loop, switch, or in conjunction with a labeled statement.
  - The `continue` statement can be used to restart a while, do-while, for, or label statement.

- The `do...while` statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated after executing the statement

  ```js
  let i = 0;
  do {
    i += 1; //so that it is not an infinite loop
  } while (i > 10);
  ```

## Control flow

Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.

### [Conditional statements](/code/control-flow/conditional-statements.js)

Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

1. The `if...else` statement executes a statement, if a specified condition evaluates to true. If the condition evaluates to false, another statement in the optional else clause will be executed.
   ```js
   if (conditional) {
     // Code to execute
   } else {
     // Code to execute
   }
   ```
2. The `switch` statement evaluates an expression, comparing the value of the expression with a series of case clauses. The default clause of a switch statement will be jumped to if no case matches the value of the expression.

   ```js
   switch (option) {
     case 1:
       // Code to execute
       break;
     case 2:
       // Code to execute
       break;
   }
   ```

### [Exception handling](/code/control-flow/exception-hendling.js)

The code in the `try` block is executed first, and if it throws an exception, the code in the `catch` block will be executed.

```js
try {
  // Code to execute
} catch (error) {
  // Code to execute
}
```

<!-- [Proxies](/code/control-flow/proxies.js) allow you to modify, validate, or override the fault behavior -->

## Operator

Operators allow you to manipulate the value of variables, perform mathematical operations with their values and compare different variables.

- [Arithmetic operator.](/code/operator/arithmetic.js)
  - Addition , Subtraction , Multiplication , Division , Modulus , Exponentiation , Increment , Decrement.
- [Comparison operator.](/code/operator/comparison.js)
  - Greater than , Smaller than , Greater than or equal , Smaller than or equal , Equal , Distinct.
- [Logical operator.](/code/operator/logical.js)
  - or , and , not , default value.
- [Ternary operator.](/code/operator/ternary.js)

## [Function](/code/function/function.js)

Functions exist so that we can reuse code. They are blocks of code that are executed each time they are invoked. Each function is usually written to perform a specific task.

```js
function isFunction() {}
```

- Function expressions.
- Arrow Function.
- Immediately Invoked Function Expression.

### [Scope and Function stack](/code/function/scope-and-function-stack.js)

A space or environment in which a particular variable or function can be accessed or used. Accessibility of this variable or function depends on where it is defined.

- The `closures` is when we call a function within another function.
- The `lexical scope` is when you declare a function inside another function and call it.
- The `recursion` is when the function is able to call itself.

## [Using (this) keyword](/code/using-this-keyword.js)

In JavaScript, the this keyword is a little different compared to other languages. It refers to an object, but it depends on how or where it is being invoked. It also has some differences strict mode and non-strict mode.

- In anonymous function
- In arrow function
- Explicit binding

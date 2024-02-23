# JavaScript Notes

This project is to have a record of what I have learned about JavaScript. Also to add or update content already seen to make it more readable.

- [Document Object Model (DOM)](/dom/dom.md)
- [Application Programming Interface (APIs)](/api/api.md)
- [Projects](/projects/projects.md)

## _Table of content_

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
- [Modules](#modules)

## What is JavaScript?

JavaScript is a programming language that developers use to make interactive web pages.

## _All about variables_

To store and represent information in JavaScript code, we use variables.

A variable is the container of a value and to use them it is necessary to declare them using one of the keywords such as **[var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)**, **[let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)** and **[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)**.

Depending on the **keyword** used it will have a certain **[scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)** this refers to the visibility of a variable or how it can be used after being declared.

The concept of **[Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)** was intended as a general way of referring to how execution contexts work in JavaScript.

## _Data Types_

We refer to the data types that we can assign to JavaScript variables. Furthermore, data types are divided into two groups, which are **[primitive types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)** and **[objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**.

| Primitive Types                                          | Code                        |
| -------------------------------------------------------- | --------------------------- |
| [String](/code/data-type/primitive-type/string.js)       | `let string = "string";`    |
| [Number](/code/data-type/primitive-type/number.js)       | `let number = 21;`          |
| [BigInt](/code/data-type/primitive-type/bigint.js)       | `let bigInt = 1e9n;`        |
| [Boolean](/code/data-type/primitive-type/boolean.js)     | `let boolean = true;`       |
| [Null](/code/data-type/primitive-type/null.js)           | `let nothing = null;`       |
| [Undefined](/code/data-type/primitive-type/undefined.js) | `let isUndefined;`          |
| [Symbol](/code/data-type/primitive-type/symbol.js)       | `let symbol = Symbol("id")` |

The [Object](/code/data-type/objects/object.js) and build in object are [Console object](/code/data-type/objects/console.js), [Date object](/code/data-type/objects/date.js), [Math object](/code/data-type/objects/math.js).

## _Type casting_

Type conversion means the transfer of data from one data type to another.

**Explicit Type Casting.**

```js
let number = parseInt("25.5");
let float = parseFloat("25.5");
let string = number.toString();
```

**Implicit Type Casting.**

```js
let numberOrString = "4" - "2";
```

**Type Conversions.**

```js
String();
Number();
Boolean();
```

## _Data Structure_

A Data structure is a format to organize, manage and store data in a way that allows efficient

The [Array](/code/data-structure/array.js) it stores multiple values and elements in one variable.

```js
let arr = ["Element 1", "Element 2", "Element 3"];
```

[Keyed Collection](/code/data-structure/keyed-collection.js) are data collections that are ordered by key not index.

```js
let set = new set();
let map = new map();
```

[JSON](/code/data-structure/json.js) is a lightweight data interchange format, easy to read, write and parse for users and generate for machines.

## _Equality comparisons_

Comparison operators are used in logical statements to determine equality or
difference between variables or values. Is Loosely Equal ( `==` ), is Strictly Equal ( `===` ), same Value ( `Object.is()` ).

## _Loops and Iterations_

Loops offer a quick and easy way to do something repeatedly. there are different ways to create a loop such as **[for](/code/loops/for.js)**, **[do while](/code/loops/do-while.js)** and **[while](/code/loops/while.js)**.

Use the **[break statement](/code/loops/break.js)** to terminate a loop, switch, or in conjunction with a labeled statement. <br/>
The **[continue statement](/code/loops/continue.js)** can be used to restart a while, do-while, for, or label statement.

## _Control flow_

Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.

**Conditional statements** control behavior in JavaScript and determine whether or not pieces of code can run. They can be [if ... else](/code/control-flow/if.js) and [Switch](/code/control-flow/switch.js).

[Exception handling](/code/control-flow/exception-hendling.js) The code in the `try` block is executed first, and if it throws an exception, the code in the `catch` block will be executed.

[Proxies]() allow you to modify, validate, or override the fault behavior

## _Operator_

Operators allow you to manipulate the value of variables, perform mathematical operations with their values and compare different variables.

- [Arithmetic operator](/code/operator/arithmetic.js)
- [Comparison operator](/code/operator/comparison.js)
- [Logical operator](/code/operator/logical.js)
- [Ternary operator](/code/operator/ternary.js)

<!-- Here -->

## _[Function](/code/function/function.js)_

Functions exist so that we can reuse code. They are blocks of code that are executed each time
they are invoked. Each function is usually written to perform a specific task.

- [Function expressions](/code/function/function-expressions.js).
- [Arrow function](/code/function/arrow-function.js).
- [IIFE](/code/function/iife.js).

### Scope and Function stack

A space or environment in which a particular variable or function can be accessed or used. Accessibility of this variable or function depends on where it is defined.

- [Closures](/code/function/closures.js).
- [Lexical Scoping](/code/function/lexical-scoping.js).
- [Recursion](/code/function/recursion.js).

## _Strict mode_

Strict mode applies to an entire script or to individual functions. To invoke strict mode on a
whole script, type exactly `"use strict";` before any other expression.

It enforces stricter parsing and error handling on the code at runtime. It also helps you write
cleaner code and catch errors and bugs that might otherwise go unnoticed.

```JS
"use strict";
// code
```

## _[Using (this) keyword](/code/using-this-keyword.js)_

In JavaScript, the this keyword is a little different compared to other languages. It refers to an object, but it depends on how or where it is being invoked. It also has some differences strict mode and non-strict mode.

- In anonymous function
- In arrow function
- Explicit binding

## _Asynchronous JavaScript_

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

## _[Classes](/code/classes/classes.js)_

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

## _[Generator](/code/generator.js)_

Iterators are objects, governed by the iterator protocol, that allow us to easily iterate
over a given sequence in a variety of ways, such as using the for...of loop.

## _Regular Expressions_

[Regular expressions](/code/regular-expressions.js) are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.

- Assertions
- Quantifiers
- Character sets
- Groups and Ranks

## _Modules_

Modules encapsulate all sorts of code like functions and variables and expose all this to other files.

The [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) declaration is used to export values from a JavaScript module.

The [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) syntax, commonly called dynamic import, is a function-like expression that allows loading an ECMAScript modules asynchronously and dynamically into a potentially non-module environment.

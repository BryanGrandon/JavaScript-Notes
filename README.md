# JavaScript.

JavaScript is an interpreted programming language used on the client-side (front-end) to provide dynamic and interactive enhancements to web pages.

- [The Document Object Model (DOM)](/docs/dom.md) is a programming interface built for HTML and XML documents. It represents the page that allows programs and scripts to dynamically update the document structure, content, and style.
- [APIs](/docs/api.md) is a piece of code that allows different applications to communicate with each other and share information and functionality.

## Table of content.

- [Important.](#important)
- [Data Type.](#data-type)
- [Data Structure.](#data-structure)
- [Loops and Interactions.](#loops-and-interactions)
- [Control Flow](#control-flow)
- [Operator](#operator)
- [Function](#function)
- [Using (this) keyword](#using-this-keyword)
- [Asynchronous JavaScript](#asynchronous-javascript)
- [Classes](#classes)
- [Generator](#generator)
- [Modules](#modules)

## Important

### Strict mode.

Strict mode applies to an entire script or to individual functions. To invoke strict mode on a complete script, type exactly `use strict;` before any other expression. Strict mode imposes stricter error handling and analysis on the code at runtime.

## Data Type.

JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

### [Primitive data types](/code/data-type-primitive.js)

All types except Object define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.

- String.
- Number.
- Boolean.
- Null.
- Undefined.
- Symbol.

### Non-primitive data type (object)

Non-primitive data types store a reference in memory to the value or object, unlike primitives, which store the value directly.

- Object.
- Array.
- Maps / WeakMaps.
- Sets / WeakSets.

### [Extra](/code/data-type-extra.js)

- Date.
- Math.
- Console.

## [Data Structure.](/code/data-structure.js)

In computer science, a data structure is a format to organize, manage and store data in a way that allows efficient access and modification.

- Array
- Keyed Collection
- JavaScript Object Notion (JSON)

## Loops and Interactions

Loops offer a quick and easy way to do something repeatedly. There are different ways to create a loop.

- For.
- While.
- Do While.

## Control Flow.

Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.

### Conditional statements.

Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

- If ... Else.
- Switch.

### Exception Handling.

The code in the `try` block is executed first, and if it throws an exception, the code in the `catch` block will be executed.

- Proxies.

## [Operator.](/code/operator.js)

Operators allow you to manipulate the value of variables, perform mathematical operations with their values and compare different variables.

- Arithmetic operator.
- Comparison operator.
- Logical operator.
- Ternary operator.

## Function.

Functions exist so that we can reuse code. They are blocks of code that are executed each time they are invoked. Each function is usually written to perform a specific task.

- Function expressions.
- Arrow Function.
- Immediately Invoked Function Expression. `(function(){})()`

### Scope and Function Stack.

A space or environment in which a particular variable or function can be accessed or used. Accessibility of this variable or function depends on where it is defined.

- The `closures` is when we call a function within another function.
- The `lexical scope` is when you declare a function inside another function and call it.
- The `recursion` is when the function is able to call itself.

## [Using (this) keyword](/code/using-this-keyword.js)

In JavaScript, the this keyword is a little different compared to other languages. It refers to an object, but it depends on how or where it is being invoked. It also has some differences strict mode and non-strict mode.

- In anonymous function
- In arrow function
- Explicit binding

## Asynchronous JavaScript.

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.

- setTimeout.
- setInterval.

### Event Loop.

JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

- Callback.
- Promises.
- Async / Await.

## Classes.

Classes are a template for creating objects. They encapsulate data with code to work on that data.

- Inheritance.
- Additional.
- Prototypes.

## [Generator.](/code/generator.js)

Iterators are objects, governed by the iterator protocol, that allow us to easily iterate
over a given sequence in a variety of ways, such as using the for...of loop.

- function\*.
- yield.

## Modules.

Modules encapsulate all sorts of code like functions and variables and expose all this to other files.

- Export.
- Import.

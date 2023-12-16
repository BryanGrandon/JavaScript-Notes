# JavaScript

An interpreted programming language used on the client side (front-end) to provide dynamic and interactive enhancements to web pages.

## _Table of content_

- [Introduction](#introduction)
- [All about variables](#all-about-variables)
- [Data Types](#data-types)
- [Type casting](#type-casting)
- [Data Structure](#data-structure)
- [Equality comparisons](#equality-comparisons)
- [Loops](#loops)
- [Control flow](#control-flow)
- [Operator](#operator)
- [Function](#function)
- [Strict mode](#strict-mode)
- [Using (this) keyword](#using-this-keyword)
- [Asynchronous JavaScript](#asynchronous-javascript)
- [Classes](#classes)
- [Generator](#generator)
- [Modules](#modules)
- []

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

## _Data Types_

Data type refers to the type of data that a JavaScript variable can hold.

### [Primitive type](/code/data-type/primitive-type.js)

In JavaScript, a primitive value is a data that is not an object and has no methods or properties. <br />
There are 7 primitive data types.

```JS
let x;

// String
x = "Text";

// Number
x = 21;

// bigInt
x = 210n;

// boolean
x = true;
x = false;

// Null
x = null;

// Undefined
x = undefined;

// Symbol
x = Symbol("id")
```

### [Object](/code/data-type/object.js)

JavaScript object is a data structure that allows us to have key-value pairs; so we can have
distinct keys and each key is mapped to a value that can be of any JavaScript data type.

```JS
const object = {
  key: "value",
};
```

### [Build in Object](/code/data-type/built-in-objects.js)

Built-in objects, or “global objects”, are those built into the language specification itself.

- Console object.
- Date object.
- Math object.

## _Type casting_

Type conversion (or typecasting) means the transfer of data from one data type to another.
Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types.
The source code can also explicitly require a conversion to take place.

```JS
// -------- Explicit Type Casting -------- //

let number = parseInt("25.5");
let float = parseFloat("25.5");
let string = number.toString();

// -------- Implicit Type Casting -------- //

let numberOrString = "4" - "2";

// ------- Type Conversions -------- //

String();
Number();
Boolean();
```

## _Data Structure_

A Data structure is a format to organize, manage and store data in a way that allows efficient
access and modification. JavaScript has primitive (built-in) and non-primitive (not built-in)
data structures.

### [Array](/code/data-structure/array.js)

The arrays it stores multiple values and elements in one variable.

```JS
const arrayString = ["Element 1", "Element 2", "Element 3"];
```

### [Keyed Collection](/code/data-structure/keyed-collection.js)

Keyed collections are data collections that are ordered by key not index. They are associative
in nature. Map and set objects are keyed collections and are iterable in the order of insertion.

**Map:** Maps are used to store a collection of elements defined by a key and value.

**Set:** Sets allow us to store collections of information, specifically values that will not be repeated.

### [JavaScript Object Notion](/code/data-structure/json.js)

JSON is a lightweight data interchange format, easy to read, write and parse for users and generate for machines.

JSON supports the following data types:

- Objects { ... }.
- Arrays [ ... ].
- Primitives type.

## _Equality comparisons_

Comparison operators are used in logical statements to determine equality or
difference between variables or values.

```JS
// -------- Is Loosely Equal -------- //

3 == "3" ? console.log(true) : console.log(false);

// -------- Is Strictly Equal -------- //

3 === "3" ? console.log(true) : console.log(false);

// -------- Same Value -------- //

Object.is(3, "3") ? console.log(true) : console.log(false);
```

## _Loops_

Loops offer a quick and easy way to do something repeatedly.

```JS
// For
for (let i = 0; i < 5; i++) {
    console.log(i)
}

// Do While
let value = 0
do {
    console.log(value)
    value += 1
} while (value > 5);

// While
while (value < 5) {
    value += 1
    console.log(value)
}
```

### Iterations

```JS
// Break //
for (let i = 0; i < 100; i++) {
  if (i === 5) break;
  console.log(i);
}

// Continue //
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Label //
label: for (let i = 0; i < 5; i++) {
  for (let x = 1; x <= 3; x++) {
    if (x === 3) break label;
    console.log(x);
  }
  console.log(i);
}
```

## _Control flow_

In JavaScript, the Control flow is a way of how your computer runs code from top to bottom.
unless it hits any statement that changes the control flow of the program such as loops,
conditionals, etc.

### [Conditional statements](/code/control-flow/conditional-statements.js)

Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

```JS
if (conditional){

} else if (conditional2){

} else {

}

switch (conditional){
    case :
        break;
    default:
        break;
}
```

### [Exception handling](/code/control-flow/exception-hendling.js)

The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed.

```JS
try {

} catch (error){

} finally {

}
```

## _[Operator](/code/operator.js)_

Operators allow you to manipulate the value of variables, perform mathematical operations with their values and compare different variables.

- Arithmetic operator
- Comparison operator
- Logical operator
- Ternary operator

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
whole script, type exactly "use strict"; before any other expression.

It enforces stricter parsing and error handling on the code at runtime. It also helps you write
cleaner code and catch errors and bugs that might otherwise go unnoticed.

```JS
"use strict"

// code
```

## _[Using (this) keyword](/code/using-this-keyword.js)_

In JavaScript, the this keyword is a little different compared to other languages. It refers to an object, but it depends on how or where it is being invoked. It also has some differences strict mode and non-strict mode.

```JS
function isAFunction() {
  console.log(this);
}
isAFunction();
```

- In anonymous function
- In arrow function
- Explicit binding

## _Asynchronous JavaScript_

Asynchronous programming is a technique that enables your program to start a potentially
long-running task and still be able to be responsive to other events while that task runs,
rather than having to wait until that task has finished.

### setTimeout

The setTimeout runs a function after the specified period expires.
Times are declared in milliseconds.

```JS
// setTimeout (func|code, [delay], [arg1], [arg2], ...)
const func1 = (user) => console.log(`Hello ${user}`);
let timerFunc1 = setTimeout(func1, 1000, "variable");
clearTimeout(timerFunc1);

let timer = setTimeout((user)=> {
  console.log(`Bye ${user}`)
}, 1000, user)
```

### setInterval

setInterval() is similar to setTimeout, with one difference. Instead of executing the callback
function once, it will execute it forever, at the specified time interval

```JS
let timerInterval = setInterval(() => {
  console.log("tick");
}, 2000);

setTimeout(() => {
  clearInterval(timerInterval);
  console.log("Stop");
}, 7000);
```

### Event Loop

**Synchronous:** The synchronous operation you wait for the result.. <br>
**Asynchronous:** The asynchronous operation does not wait for the result.

```JS
console.log(1);

setTimeout(() => { console.log(2);
}, 0);

console.log(3);
// execution order -> 1, 3, 2
```

### [Callback](/code/asynchronous/callback.js)

A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.

```JS
function greet(name){
  console.log(`Hello ${name}`)
}
function users(callback){
  let name = "bryan"
  callback(name)
}
users(greet)
```

### [Promise](/code/asynchronous/promise.js)

Promises are a much better way to work with asynchronous code in JavaScript than
the old and error-prone callback approach.

```JS
const callAnAPI = () => {
  return { data: "API" };
};
const promise = new Promise((resolve, reject) => {
  const data = callAnAPI();
  if (data) {
    resolve(data);
  } else {
    reject(Error("An error occurred"));
  }
});
promise
  .then((data) => {
    // Use the data
    console.log("the data is:", data);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });
```

### [Async / Await](/code/asynchronous/async-await.js)

async/await is a special syntax to work with promises in a more comfortable fashion.
We use async keyword to declare a async function that return a Promise, and the await keyword
makes a function wait for a Promise.

```JS
async function asynchronousFunction() {
  try {
    console.log("Start Async Function");

    // await -> wait for the result
    let obj = await elevationPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
  }
}
```

## _[Classes](/code/classes/classes.js)_

Classes are a template for creating objects. They encapsulate data with code to work on that data.

```JS
class MyClass {
  constructor() {}
  method1() {}
  method2() {}
}
```

### [Getter Setter](/code/classes/getter-setter.js)

- Getter, the code executed to get obj.propName
- Setter, the code executed to set obj.propName = value

```JS
get fullName() {
    return `${this.name} ${this.lastName}`;
  },

set fullName(value) {
  [this.name, this.lastName] = value.split(" ");
},
```

### [Inheritance](/code/classes/inheritance.js)

```JS
class Staff extends Human {
  constructor(country, language, name, age) {
    super(country, language); // Human constructor element
    this.name = name;
    this.age = age;
  }
}
```

### [Additional](/code/classes/additional.js)

- Protected properties are usually prefixed with the underscore \_.
- Privates should start with #. They are only accessible from inside the class.

## _[Generator](/code/generator.js)_

Iterators are objects, governed by the iterator protocol, that allow us to easily iterate
over a given sequence in a variety of ways, such as using the for...of loop.

```JS
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator = generateSequence();
console.log(generator);
```

## _Modules_

Modules encapsulate all sorts of code like functions and variables and expose all this to other files.

### Export

**Named:** The name of the imported data is the one that allows us to import it to another file.
There may be multiple exports.

```JS
let variable = "variable";
const array = [1, 2, 3, 4];
const object = {
  id: 1,
  user: "Bryan",
  email: "@gmail.com",
};
function forExport() {
  console.log(`Function Exported`);
}
export {variable, object, array, forExport}
```

**Default:** There can only be one export default.
Note that it is not possible to use var, let, or const with export default.

```JS
export default function forExportDefault() {
  console.log(`Export Default`);
}
```

### Import

The import() syntax, commonly called dynamic import, is a function-like expression that allows loading an ECMAScript modules asynchronously and dynamically into a potentially non-module environment.

```JS
// Export Default
import forExportDefault, {
  // Export
  array,
  forExport,
  object,
  variable,
} from "./export.js";

// Export
const obj = object;
console.log(obj);
let data = variable;
console.log(data);
const arr = array;
console.log(arr);
forExport("Bryan");

// Export Default
forExportDefault();

```

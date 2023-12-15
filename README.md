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

# JavaScript

An interpreted programming language used on the client side (front-end) to provide dynamic and interactive enhancements to web pages.

## _Table of content_

- [Introduction](#introduction)
- [All about variables](#all-about-variables)
- [Data Types](#data-types)

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

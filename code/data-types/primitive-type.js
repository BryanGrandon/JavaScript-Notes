//  String

let string = "Way of writing string";
let concatenation = "Hello" + "World";
let backtick = `String Content ${variable}`;
let html = `<p>Element HTML in JS</p>`;

const specialCharacters = {
  newLine: ["\n", "\r\n"],
  tabulation: "\t",
};

//  Number

const number = 25;

const wayOfWritingNumbers = {
  normal: 1000,
  normal_: 1_000,
  abbreviation: 1e3,
  hexadecimal: 0x3e8,
  binary: 0b1111101000,
  octal: 0o1750,
};

const nan = "Operations with what is not a number"; // Not a Number (NaN)
const operatorNan = 20 * "NaN";
const isNan = isNaN(20 * "NaN"); // true

const isInfinity = [Infinity, 1e500]; // Infinity

//  Boolean

const boolean = [true, false];

const isTrue = true;
const isFalse = false;

let value = 5 > 1; // Boolean values are also the result of comparisons

//  Null - Reference to a non-existent object.

let nothing = null;
let empty = null;

//  Undefined

let noValue; // Value not assigned.
let undefinedValue = undefined; // Undefined keyword.

//  Symbol

const symbol = [Symbol("id"), Symbol("id")];

let isEqual = symbol[0] === symbol[1];
let description = symbol[0].description;

const symbolKeyFor = {
  sym: Symbol.for("name"),
  sym2: Symbol("id"),
};
let keyFor = Symbol.keyFor(sym);

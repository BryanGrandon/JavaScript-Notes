// STRING

let string = "Way of writing string";
let concatenation = "Hello" + "World";
let backtick = `String Content ${variable}`;
let html = `<p>Element HTML in JS</p>`;
const specialCharacters = {
  newLine: ["\n", "\r\n"],
  tabulation: "\t",
};

// NUMBER

const number = 25;
const wayOfWritingNumbers = {
  normal: 1000,
  normal_: 1_000,
  abbreviation: 1e3,
  hexadecimal: 0x3e8,
  binary: 0b1111101000,
  octal: 0o1750,
};
const nan = "Operations with what is not a number";
const operatorNan = 20 * "NaN";
const isNan = isNaN(20 * "NaN"); // true
const isInfinity = [Infinity, 1e500];

// BIGINT

const bigInt = 9007199254740992n; // an (n) must be added at the end to make it a bigint
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
const hugeNumbers = {
  normal: BigInt(9007199254740991),
  string: BigInt("9007199254740991"),
  hexadecimal: BigInt(0x1fffffffffffff),
  binary: BigInt(0b11111111111111111111111111111111111111111111111111111),
  octal: BigInt(0o377777777777777777),
};

// BOOLEAN

const boolean = [true, false];
const isTrue = true;
const isFalse = false;
// Boolean values are also the result of comparisons
let value = 5 > 1;

// NULL

// Reference to a non-existent object.
let nothing = null;
let empty = null;

// UNDEFINED

let noValue; // Value not assigned.
let undefinedValue = undefined; // Undefined keyword.

// SYMBOL

const symbol = [Symbol("id"), Symbol("id")];
let isEqual = symbol[0] === symbol[1];
let description = symbol[0].description;
const symbolKeyFor = {
  sym: Symbol.for("name"),
  sym2: Symbol("id"),
};
let keyFor = Symbol.keyFor(sym);

// -------- Arithmetic Operator -------- //

const math = {
  addition: " + ",
  subtraction: " - ",
  multiplication: " * ",
  division: " / ",
  exponentiation: " ** ",
  modules: "%",
  increment: "++",
  decrement: "--",
};

// -------- Comparison Operator -------- //

const comparisons = {
  greaterThan: ">",
  smallerThan: "<",
  greaterThanOrEqual: ">=",
  lessThanOrEqualTo: "<=",
  equal: "==",
  distinct: "!=",
};

// strict distinct ( !== )
console.log(1 != "1"); // false
console.log(1 !== "1"); // true

// String comparison
console.log("Z" > "A"); // true
console.log("Glow" > "Glee"); // true

// Comparison of different types
console.log("2" > 1); // true
console.log("01" == 1); // true

// null and undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// -------- Logical Operator -------- //

// || ( or )
const or = (value1, value2) => {
  let result = value1 || value2;
  console.log(`( ${value1} || ${value2} ) = ${result} `);
};
or(true, false); // true
or(false, false); // false

// && ( and )
const and = (value1, value2) => {
  let result = value1 && value2;
  console.log(`( ${value1} || ${value2} ) = ${result} `);
};
and(true, false); // false
and(true, true); // true

// ! ( not )
const not = (value) => {
  let result = !value;
  console.log(`( !${value} ) = ${result} `);
};
not(true); // false
not(false); // true

// The typical use of ( ?? ) is to provide a default value
let userName;
let user = userName ?? "anonymous";
console.log(user); // anonymous

// Comparison with || ( or )
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

// ( || ) returns the first true value.
// ( ?? ) returns the first defined value.

// -------- Ternary Operator -------- //

let condition = true;

let option_1 = condition ? "Yes it's True" : "Yes it's False";
console.log(option_1);

// Example
let age = 19;
age >= 18 ? console.log("Is adult") : console.log("Not is adult"); // Is adult

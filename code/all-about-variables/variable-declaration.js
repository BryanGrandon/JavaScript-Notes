// -------- Var -------- //
// The keyword var defines a variable with global scope.

var x = "Hello";
x = [];
x = 12;
console.log(x); // 12

// -------- Let -------- //
// The let statement declares a locally scoped variable with block scope.

let y = "Hello";
y = 21;
y = [];
console.log(y); // []

// -------- Const -------- //
// The const declaration declares block-scope local variables.

const z = 20;
z = 10; // Error Assignment to constant variable
z = "text"; // Error Assignment to constant variable

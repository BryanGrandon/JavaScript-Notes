function selectName(parameters) {
  console.log(parameters);
}
selectName("21");

// Return
function addition(n1, n2) {
  return n1 + n2;
}
let result = addition(6, 9);

// Copy a function to another variable
const copy = addition;
let resultCopy = copy(2, 4);

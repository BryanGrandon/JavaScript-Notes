function selectName(parameters) {
  console.log(parameters);
}
selectName("21");

function addition(n1, n2) {
  return n1 + n2;
}
let result = addition(6, 9);
const copy = addition; // Copy a function to another variable
let resultCopy = copy(2, 4);

// Function Expression

const anonymousFunction = function (coffee = true) {
  if (coffee) console.log("wants a coffee");
  else console.log("doesn't want a coffee");
};
anonymousFunction();

// Arrow Function

const arrowFunction = (coffee = true) => {
  if (coffee) console.log("wants a coffee");
  else console.log("doesn't want a coffee");
};
arrowFunction();

// Immediately Invoked Function Expression

(function () {
  console.log(`Hello`);
})();

let user = "Andrés";
((x) => {
  console.log(`Hello ${x}`);
})(user);

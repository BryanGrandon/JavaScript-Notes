// Immediately Invoked Function Expression ( IIFE ) //

(function () {
  console.log(`Hello`);
})();

// Arrow function

let user = "andres";
((x) => {
  console.log(`Hello ${x}`);
})(user);

// Arguments

function argument(a, b, c) {
  console.log(arguments[1]);
}
argument(1, 2, 3);

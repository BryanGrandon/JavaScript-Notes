/*
    The condition is evaluated after executing the statement,
    resulting in the specified statement executing at least once.
*/

let value = "";
let i = 0;

do {
  value = "First";
  i += 1; //so that it is not an infinite loop
} while (i > 5);

console.log(value);
console.log(i);

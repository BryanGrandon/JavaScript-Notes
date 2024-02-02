// The condition is evaluated before executing the statement.

let i = 0;
let value = "Nothing";

while (i > 5) {
  i += 1; //so that it is not an infinite loop
  value = "First";
}

console.log(value);
console.log(i);

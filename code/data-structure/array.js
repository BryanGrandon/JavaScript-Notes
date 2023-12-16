const arrayString = ["Apple", "Banana", "Orange"];

const accessArray = {
  start: arrayString[0],
  end: arrayString.at(-1),
};
console.log(accessArray);

arrayString[1] = "Lemon"; // Rename or Replace

let numberOfElements = arrayString.length;
const otherArray = [true, { name: "Andres" }, 32];

// Destructuring

const array = ["element 1", "element 2"];
let [element_1, element_2] = array;
console.log(element_1, element_2);

let [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three);

// ...
let [name1, name2, ...others] = ["Bryan", "Andres", "Harry", "Sofia"];
console.log(others);

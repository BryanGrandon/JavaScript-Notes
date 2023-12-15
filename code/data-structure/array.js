const arrayString = ["Apple", "Banana", "Orange"];

const accessArray = {
  start: arrayString[0],
  end: accessArray.at(-1),
};

arrayString[1] = "Lemon"; // Rename or Replace

let numberOfElements = arrayString.length;
const otherArray = [true, { name: "Andres" }, 32];

// Array Methods //

array = [1, 2, 3, 4];

const arrayMethods = {
  delete: {
    start: array.shift(),
    end: array.pop(),
  },
  add: {
    start: array.unshift(0),
    end: array.push(5),
  },

  Map: array.map((x) => x + 10),
  filter: array.filter((x) => x > 3),

  forEach: array.forEach((e, i) => {
    console.log(`${e} index: ${i} `);
  }),

  some: array.some((x) => x > 3),
  every: array.every((x) => x > 3),
};

const order = [1, 3, 2, 4, 6, 5];
const arrOrder = order.sort((a, b) => (a > b ? 1 : -1));
const arrOrder2 = order.sort((a, b) => (a > b ? -1 : 1));

const reverse = array.reverse();

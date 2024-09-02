const chef = {
  type: "Basic Kitchen",
  cook: (dish) => {
    console.log(`Cooking ${dish}`);
  },
};

const jack = {
  name: "Jack",
  age: 31,
  profession: "Developer",
};

Object.setPrototypeOf(jack, chef);

console.log(jack.type);
jack.cook("Pizza");

// Add new function to chef
chef.cut = function (ingredient) {
  console.log(`Cut ${ingredient}`);
};
jack.cut("Carrot");

// (This) in Object delegation

chef.greet = function () {
  console.log(`Hello, I am chef specializing in ${this.type}`);
};
jack.greet();

jack.type = "Front-End";
jack.greet();

// is Prototype Of

console.log(`Is chef prototype of jack: ${chef.isPrototypeOf(jack)}`);

// assign

const person_1 = {
  eyes: "brown",
  hair: "Black",
  skin: "skin-color-1",
};

const clon_1 = Object.assign({}, person_1);
console.log(clon_1);

const person_2 = {
  hair: "brown",
  skin: "skin-color-2",
};

const person_3 = {
  skin: "skin-color-3",
  height: 168,
};

const clon_2 = Object.assign({}, person_1, person_2, person_3);
console.log(clon_2);

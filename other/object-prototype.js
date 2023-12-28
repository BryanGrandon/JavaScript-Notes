"use strict";
// Object Delegation

// 1. Literal Objects

const obj = { name: "Bryan" }; // Object.prototype
const array = [1, 2, 3]; // Array.prototype
const isFunction = () => {}; // Function.prototype

// 2. Object.create()

const person = {
  init: function (name) {
    this.name = name;
    return this;
  },
  greet: function () {
    console.log(`Hello, My name is ${this.name}`);
    return this;
  },
};

const bryan = Object.create(person).init("Bryan").greet();

// 3. Function Constructor / Class

function chef_2(type = "Basic Kitchen") {
  this.type = type;
}
chef_2.prototype.cook = function (dish) {
  console.log(`Cooking ${dish}`);
};
const andres = new chef_2();

class Chef_3 {
  constructor(type = "Basic Kitchen") {
    this.type = type;
  }
  cook(dish) {
    console.log(`Cooking ${dish}`);
  }
}
const camila = new Chef_3();

// 4. __proto__ and setPrototypeOf()

const user = {
  name: "Bryan",
  profession: "Developer",
  type: "Front-end",
};
user.__proto__ = chef;
Object.setPrototypeOf(user, chef);

// =====================================

// New Function of the chef

chef.cut = function (ingretient) {
  console.log(`Cut ${ingretient}`);
};
user.cut("potatoes");

// Is prototype of

console.log(chef.isPrototypeOf(user));

// (This) in Object delegation

chef.greet = function () {
  console.log(`Hello, I am chef specializing in ${this.type}`);
};
user.greet();

// assing

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

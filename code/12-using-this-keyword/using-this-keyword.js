"use strict";

function isAFunction() {
  console.log(this);
}
isAFunction();

// Anonymous Function

this.name = "Global";
const object = {
  name: "obj",
  print: function () {
    console.log(this.name);
  },
};
object.print();

// Arrow Function ( Not occupy )

const objArrow = {
  name: "obj arrow",
  print: () => {
    console.log(this.name);
  },
};
objArrow.print();

// Methods
const user = {
  name: "Andres",
  age: 34,
  greeting() {
    console.log(this.name);
    console.log(user.name);
  },
};
user.greeting();
let admin = user;
admin.greeting();

// Explicit Binding

function sayHi(phrase = undefined) {
  console.log(`${this.name}: ${phrase}`);
}
let user2 = { name: "Bryan" };
let admin2 = { name: "Admin" };

// Call
sayHi.call(user2);
sayHi.call(user2, "Call");

// apply
sayHi.apply(admin2);
sayHi.apply(admin2, ["Apply"]);

// bind
let objectBind = {
  firstName: "Bryan",
  age: 21,
  greet(phrase = "Text not entered") {
    console.log(`${phrase} "${this.firstName}"`);
  },
};

let greet = objectBind.greet.bind(objectBind);
greet();

function userName() {
  console.log(this.firstName);
}
let forUser = userName.bind(objectBind);
forUser();

// Partial functions
function multiplication(a, b) {
  return a * b;
}

let double = multiplication.bind(null, 2);
console.log(double(2));
console.log(double(3));

let triple = multiplication.bind(null, 3);
console.log(triple(2));
console.log(triple(3));

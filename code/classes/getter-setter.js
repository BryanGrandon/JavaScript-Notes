"use strict";

class User {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("The name is short");
      return;
    }
    this._name = value;
  }
}

let user2 = new User("Bryan");
console.log(user2.name);
console.log(user2);

// ---- Object ---- //

const userObj = {
  name: "Bryan",
  lastName: "G",

  get fullName() {
    return `${this.name} ${this.lastName}`;
  },

  set fullName(value) {
    [this.name, this.lastName] = value.split(" ");
  },
};

console.log(userObj.fullName);
userObj.fullName = "Brays M";
console.log(userObj.name, userObj.lastName);

// ---- DefineProperty ---- //

const userObj2 = {
  name: "Bryan",
  lastName: "G",
};

Object.defineProperty(userObj2, "fullName", {
  get() {
    return `${this.name} ${this.lastName}`;
  },
  set(value) {
    [this.name, this.lastName] = value.split(" ");
  },
});

console.log(userObj2.fullName);
userObj2.fullName = "Alice Cooper";
console.log(userObj2.name, userObj2.lastName);

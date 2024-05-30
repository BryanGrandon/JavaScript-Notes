const person = {
  name: "",
  lastName: "",
  age: 0,
};

const handler = {
  set(obj, prop, value) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(`The property "${prop}" does not exist.`);
    }

    // Validations for elements
    obj[prop] = value;
  },
};

const leo = new Proxy(person, handler);
leo.name = "Leo";
leo.lastName = "Smith";
leo.age = 21;
console.log(leo);

leo.type = "Front-End"; // The property "type" does not exist.

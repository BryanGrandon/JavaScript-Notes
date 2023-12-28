/* Proxies allow you to modify, validate, or override the fault behavior */

const person = {
  name: "",
  lastName: "",
  age: 0,
};

const handler = {
  set(obj, prop, value) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(`The property "${prop}" does not exist`);
    }

    // Validations for elements

    obj[prop] = value;
  },
};

const bryan = new Proxy(person, handler);
bryan.name = "Bryan";
bryan.lastName = "Grandon";
bryan.age = 21;

console.log(bryan); // {name: 'Bryan', lastName: 'Grandon', age: 21}

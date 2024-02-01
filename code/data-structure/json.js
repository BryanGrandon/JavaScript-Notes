// JavaScript Object Notion

const student = {
  name: "Bryan",
  age: 21,
  isAdmin: false,
  courses: ["html", "css", "js"],
  something: undefined,
};

// JSON.stringify(value, replacer, space)
let json = JSON.stringify(student, null, 2);
console.log(json);

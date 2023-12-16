function modify(array, callback) {
  array.push("bryan");
  callback(array);
}

const names = ["catalina", "cecilia"];

modify(names, (array) => {
  console.log(`Now the array is  ${array.length} elements`);
});

// asynchronous

function modify2(array, callback) {
  array.push("andres");
  setTimeout(() => {
    callback(array);
  }, 3000);
}

modify2(names, (array) => {
  console.log(`Now the array is  ${array.length} elements`);
});

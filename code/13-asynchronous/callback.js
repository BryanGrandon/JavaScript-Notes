function modify(array, callback) {
  array.push("Bryan");
  callback(array);
}

const names = ["catalina", "Cecilia"];

modify(names, (array) => {
  console.log(`Now the array is  ${array.length} elements`);
});

// asynchronous

function modify2(array, callback) {
  array.push("Andrés");
  setTimeout(() => {
    callback(array);
  }, 3000);
}

modify2(names, (array) => {
  console.log(`Now the array is  ${array.length} elements`);
});

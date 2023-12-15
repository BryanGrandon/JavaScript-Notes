// Calling a function inside another function.

function init() {
  let name = "Bryan";
  displayName(name);
}

function displayName(name) {
  console.log(name);
}

init();

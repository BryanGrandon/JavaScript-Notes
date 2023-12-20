// -------- Global Scope -------- //
// It can be accessed from anywhere within the same JavaScript code.

var global = "Global scope";
{
  console.log(global);
}

// -------- Function scope -------- //
// Variables declared inside a function can only be used.

function hi(name) {
  let greet = `Hello `;
  console.log(greet + name);
}
console.log(greet);

// -------- Block scope -------- //
// Variables declared within a block cannot be accessed outside.

let block = "Block scope 1";
{
  let block = "Block scope 2";
  console.log(block);
}
console.log(block);

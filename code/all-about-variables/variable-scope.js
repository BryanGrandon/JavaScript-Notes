// -------- Global Scope -------- //

var global = "Global scope";
{
  console.log(global);
}

// -------- Function scope -------- //

function hi(name) {
  let greet = `Hello `;
  console.log(greet + name);
}
console.log(greet);

// -------- Block scope -------- //

let block = "Block scope 1";
{
  let block = "Block scope 2";
  console.log(block);
}
console.log(block);

// Declaring a function inside another function and calling it.

function lexical() {
  let name = "Andres";

  function scoping(name) {
    console.log(name);
  }
  scoping(name);
}
lexical();

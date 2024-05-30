try {
  // code to evaluate
  errorInTry;
} catch (error) {
  // Catch any errors raised in the (try {})
  console.log(error);
} finally {
  //  It will be executed at the and of the try-case
  console.log(`finished code test`);
}

// throw //
function number(number) {
  if (isNaN(number)) throw new Error("Parameter is not a number!");
}
try {
  number("a");
} catch (e) {
  console.error(e);
}

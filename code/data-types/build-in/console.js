console.log("Outputs a message to the console.");
console.info("Outputs an informational message to the console.");
console.warn("Outputs a warning message to the console.");
console.error("Outputs a error message to the console.");
console.clear("Clears the console if the console allows it.");
console.table("Displays tabular data as a table.");

console.count(
  "Logs the number of times that this particular call to count() has been called."
);
console.countReset("Resets counter used with console.count().");

console.group("Creates a new inline group in the Web console log.");
console.groupEnd("Exits the current inline group in the console.");

console.time(
  "Starts a timer you can use to track how long an operation takes."
);
console.timeLog(
  "Logs the current value of a timer that was previously started by calling console.time()."
);
console.timeEnd(
  "Stops a timer that was previously started by calling console.time()."
);

// -------- Console Object -------- //

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

// -------- Date Object -------- //

let now = new Date();

let date = new Date(2000, 11, 19);

const componentsOfDate = {
  year: now.getFullYear(),
  month: now.getMonth(),
  day: { month: now.getDate(), week: now.getDay() },
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
  milliseconds: now.getMilliseconds(),
};

// Date String

now.toString(); // 'Thu Mar 09 2023 11:43:20 GMT-0300'
now.toDateString(); // 'Thu Mar 09 2023'
now.toLocaleString(); // '9/3/2023, 11:42:32'
now.toLocaleDateString(); // '9/3/2023'
now.toLocaleTimeString(); // '11:44:35'

// -------- Math Object -------- //

const methods = {
  floor: Math.floor(3.6),
  ceil: Math.ceil(3.1),
  round: Math.round(3.5),
  trunc: Math.trunc(3.5),
  squareRoot: Math.sqrt(25),
  cubeRoot: Math.cbrt(27),
  maxNumber: Math.max(3, 4, 5, 6),
  minNumber: Math.min(-2, 4, 2, 1),
  randomNumber: Math.random() * 10,
};

const properties = {
  PI: Math.PI,
  SQUARE_ROOT1_2: Math.SQRT1_2,
  SQUARE_ROOT2: Math.SQRT2,
  EULER: Math.E,
  NATURAL_LOGARITHM2: Math.LN2,
  NATURAL_LOGARITHM10: Math.LN10,
  THE_BASE_2_LOGARITHM_EULER: Math.LOG2E,
  THE_BASE_10_LOGARITHM_EULER: Math.LOG10E,
};

// setTimeout (func|code, [delay], [arg1], [arg2], ...)
const func1 = (user) => console.log(`Hello ${user}`);

let timerFunc1 = setTimeout(func1, 1000, "variable");
clearTimeout(timerFunc1);

let timer = setTimeout(
  (user) => {
    console.log(`Bye ${user}`);
  },
  1000,
  user
);

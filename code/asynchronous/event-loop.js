console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

// execution order -> 1, 3, 2

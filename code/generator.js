"use strict";

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator = generateSequence();
console.log(generator);

// ---- next() ---- //

let one = generator.next();
console.log(JSON.stringify(one));

let two = generator.next();
console.log(JSON.stringify(two));

let three = generator.next();
console.log(JSON.stringify(three));

// ---- Generators are iterable ---- //

function* generateSequence_2() {
  yield 1;
  yield 2;
  yield 3;
}

let generator_2 = generateSequence_2();
for (let value of generator_2) {
  console.log(value);
}

let sequence = [0, ...generateSequence_2()];
console.log(sequence);

// ---- Generator composition ---- //

function* generateSequence_3(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

let example = generateSequence_3(0, 3);
console.log(...example);

// ---- generator return ---- //

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next());
console.log(g.return("foo"));
console.log(g.next());

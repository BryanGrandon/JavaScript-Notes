const number = 25;

const wayOfWritingNumbers = {
  normal: 1000,
  normal_: 1_000,
  abbreviation: 1e3,
  hexadecimal: 0x3e8,
  binary: 0b1111101000,
  octal: 0o1750,
};

const nan = "Operations with what is not a number";
const operatorNan = 20 * "NaN";
const isNan = isNaN(20 * "NaN"); // true

const isInfinity = [Infinity, 1e500];

// --- Arithmetic Operators --- //

const addition = (a, b) => a + b
const subtraction = (a, b) => a - b
const multiplication = (a, b) => a * b
const division = (a, b) => a / b
const exponentiation = (a, b) => a ** b
const modulus = (a, b) => a % b
const increment = (a) => ++a
const decrement = (a) => --a

// --- Comparison Operators --- //

const greaterThan = (a, b) => a > b //  >
const smallerThan = (a, b) => a < b //  <
const greaterThanOrEqualTo = (a, b) => a >= b //  >=
const lessThanOrEqualTo = (a, b) => a <= b //  <=
const equal = (a, b) => a == b //  ==
const strictEqual = (a, b) => a === b //  ===
const distinct = (a, b) => a != b //  !=
const strictDistinct = (a, b) => a !== b // !==

// --- Logical Operators --- //

const logicalAnd = (a, b) => a && b
const logicalOr = (a, b) => a || b
const logicalNot = (a) => !a
const logicalNullishCoalescing = (a, b) => a ?? b

// --- Ternary Operator --- //

const ternary = (condition) => (condition ? "Yes it's True" : "Yes it's False")

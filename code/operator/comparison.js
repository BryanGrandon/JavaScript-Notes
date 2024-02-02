const comparisons = {
  greaterThan: ">",
  smallerThan: "<",
  greaterThanOrEqual: ">=",
  lessThanOrEqualTo: "<=",
  equal: "==",
  distinct: "!=",
};

// strict distinct ( !== )
console.log(1 != "1"); // false
console.log(1 !== "1"); // true

// String comparison
console.log("Z" > "A"); // true
console.log("Glow" > "Glee"); // true

// Comparison of different types
console.log("2" > 1); // true
console.log("01" == 1); // true

// null and undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

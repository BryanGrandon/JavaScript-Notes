const symbol = [Symbol("id"), Symbol("id")];

let isEqual = symbol[0] === symbol[1];
let description = symbol[0].description;

const symbolKeyFor = {
  sym: Symbol.for("name"),
  sym2: Symbol("id"),
};
let keyFor = Symbol.keyFor(sym);

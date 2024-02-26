// Map

const map = new Map();
map.set("key", "value"); // Define the Key and its Value

const methodsMapOrSet = {
  checkIfAElementExistsMap: map.has("key"),
  size: map.size,
  delete: map.delete("key"),
  clear: map.clear(),
};
let getOfValueMap = map.get("key");
const weakMap = new WeakMap(); // weakMap
let object = { name: "Bryan" }; // Define the Value and the key has to be an object
weakMap.set(object, "...");

// Set

const set = new Set();
const arr = [1, 2, 3];

set.add(2);
set.add(2); // Does not support repeated values
set.add(arr);
const weakSet = new WeakSet(); // weakSet
const obj_1 = { name: "obj 1" };
const obj_2 = { name: "obj 2" };
weakSet.add(obj_1);
weakSet.add(obj_1);
weakSet.add(obj_2);

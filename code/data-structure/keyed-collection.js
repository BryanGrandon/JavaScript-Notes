// -------- Map -------- //
// Maps are used to store a collection of elements defined by a key and value.

const map = new Map();

map.set("key", "value"); // Define the Key and its Value

const methodsMapOrSet = {
  checkIfAElementExistsMap: map.has("key"),
  size: map.size,
  delete: map.delete("key"),
  clear: map.clear(),
};
let getOfValueMap = map.get("key");

// weakMap //

const weakMap = new WeakMap();
let object = { name: "Bryan" }; // Define the Value and the key has to be an object
weakMap.set(object, "...");

// -------- Set -------- //
// Sets allow us to store collections of information, specifically values that will not be repeated.

const set = new Set();

const arr = [1, 2, 3];
set.add(2);
set.add(2); // Does not support repeated values
set.add(arr);

// weakSet //

const weakSet = new WeakSet();
const obj_1 = { name: "obj 1" };
const obj_2 = { name: "obj 2" };
weakSet.add(obj_1);
weakSet.add(obj_1);
weakSet.add(obj_2);

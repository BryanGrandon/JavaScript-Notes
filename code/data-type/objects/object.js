// The JavaScript object is a data structure that allows us to have key-value pairs.

const object = {
  key: "value",
  keyDelete: "value",
};

// -------- Methods -------- //

let access = object.key; // Access

object.keyName = "value"; // Add

delete object.keyDelete; // Delete

let existingProperty = "key" in object; // Existing Property

const forObject = {
  keys: Object.Keys(object),
  values: Object.values(object),
  entries: Object.entries(object),
};

// -------- Assign -------- //

const cloneObject = Object.assign({}, object);

// -------- Object.defineProperty() -------- //

Object.defineProperty(object, "key", {
  writable: false, // Not rename value
  enumerable: false, // Not iterable
  configurable: false, // Not delete
});

Object.defineProperties(object, {
  key: { value: "Value", writable: true },
});

// Clone object and properties
let cloneObjectAndProperties = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(object)
);

// -------- Destructuring -------- //

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { title, width, height } = options;
console.log(title);

for (let [key, value] of Object.entries(options)) {
  console.log(`${key}: ${value}`);
}

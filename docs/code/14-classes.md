# Classes

Classes are a template for creating objects. They encapsulate data with code to work on that data.

[Methods](/code/14-classes/classes.js)

## Getter Setter

```JS
// Getter, the code executed to get obj.propName
get fullName() {
    return `${this.name} ${this.lastName}`;
  },
// Setter, the code executed to set obj.propName = value
set fullName(value) {
  [this.name, this.lastName] = value.split(" ");
},
```

[Methods](/code/14-classes/getter-setter.js)

In programming, [inheritance](/code/14-classes/inheritance.js) refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.

## Additional

- Protected properties are usually prefixed with the underscore \_.
- Privates should start with #. They are only accessible from inside the class.

[Methods](/code/14-classes/additional.js)

## Prototype

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

[Methods](/code/14-classes/prototype.js)

---

[📒 Back to main note.📒](/README.md)

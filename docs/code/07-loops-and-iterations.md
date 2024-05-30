# Loops and iterations

Loops offer a quick and easy way to do something repeatedly. there are different ways to create a loop such as `for`, `do while` and `while`.

## For

```js
// for (initialization; condition; afterthought) { statement }
let str = "";
for (let i = 0; i <= 5; i++) {
  str += i;
}
```

## While

```js
// The condition is evaluated before executing the statement.
let i = 0;
while (i < 5) {
  i += 1; //so that it is not an infinite loop
}

// do Wile

// The condition is evaluated after executing the statement.
do {
  i += 1; //so that it is not an infinite loop
} while (i > 10);
```

Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement. <br/>
The continue statement can be used to restart a while, do-while, for, or label statement.

```js
// Break

for (let i = 0; i < 100; i++) {
  if (i === 5) break;
}

label: for (let i = 0; i < 5; i++) {
  for (let x = 1; x <= 3; x++) {
    if (x === 3) break label;
  }
}

// Continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
}
```

---

[📒 Back to main note.📒](/README.md)

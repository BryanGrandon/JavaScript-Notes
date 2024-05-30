# Asynchronous JavaScript

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.

## setTimeout

The setTimeout runs a function after the specified period expires. Times are declared in milliseconds.

```JS
// setTimeout (func|code, [delay], [arg1], [arg2], ...)
```

[Methods](/code/13-asynchronous/settimerout.js)

## setInterval

setInterval is similar to setTimeout, with one difference. Instead of executing the callback function once, it will execute it forever, at the specified time interval

```JS
// setInterval (func|code, [delay], [arg1], [arg2], ...)
```

[Methods](/code/13-asynchronous/setinterval.js)

## Event Loop

- Synchronous: The synchronous operation you wait for the result..
- Asynchronous: The asynchronous operation does not wait for the result.
- [Methods](/code/13-asynchronous/event-loop.js)

A [Callback](/code/13-asynchronous/callback.js) function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.

[Promises](/code/13-asynchronous/promise.js) are a much better way to work with asynchronous code in JavaScript than
the old and error-prone callback approach.

[Async / Await](/code/13-asynchronous/async-await.js) is a special syntax to work with promises in a more comfortable fashion. We use async keyword to declare a async function that return a Promise, and the await keyword makes a function wait for a Promise.

---

[📒 Back to main note.📒](/README.md)

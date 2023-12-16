function elevationPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `mistake. The entered value '${value}' is not a number`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, Math.random() * 1000);
  });
}
elevationPromise(0)
  .then((obj) => {
    console.log("Start of promise");
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return elevationPromise(1);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return elevationPromise(2);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return elevationPromise(3);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return elevationPromise(4);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return elevationPromise("s");
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    console.log("Finished promise");
  })
  .catch((err) => {
    console.error(err);
  });

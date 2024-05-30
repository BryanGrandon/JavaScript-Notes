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

//  Async
async function asynchronousFunction() {
  try {
    console.log("Start Async Function");

    // await -> wait for the result
    let obj = await elevationPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await elevationPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await elevationPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await elevationPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await elevationPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await elevationPromise("5");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Finished Async Function");
  } catch (err) {
    console.error(err);
  }
}
asynchronousFunction();

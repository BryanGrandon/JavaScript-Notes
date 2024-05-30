let timerInterval = setInterval(() => {
  console.log("tick");
}, 2000);

setTimeout(() => {
  clearInterval(timerInterval);
  console.log("Stop");
}, 7000);

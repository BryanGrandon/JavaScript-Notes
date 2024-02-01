let now = new Date();

let date = new Date(2000, 11, 19);

const componentsOfDate = {
  year: now.getFullYear(),
  month: now.getMonth(),
  day: { month: now.getDate(), week: now.getDay() },
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
  milliseconds: now.getMilliseconds(),
};

// Date String

now.toString(); // 'Thu Mar 09 2023 11:43:20 GMT-0300'
now.toDateString(); // 'Thu Mar 09 2023'
now.toLocaleString(); // '9/3/2023, 11:42:32'
now.toLocaleDateString(); // '9/3/2023'
now.toLocaleTimeString(); // '11:44:35'

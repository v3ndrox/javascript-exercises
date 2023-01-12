const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (...args) {
  let sum = 0;
  for (let slots of args) {
    if (typeof slots === "number") {
      sum += slots;
    } else {
      for (let num of slots) {
        sum += num;
      }
    }
  }
  return parseInt(sum);
};

const multiply = function (array) {
  return array.length ? array.reduce((total, nextNum) => total * nextNum) : 0;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n == 0) return 1;
  let num = 1;
  for (let i = 1; i <= n; i++) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

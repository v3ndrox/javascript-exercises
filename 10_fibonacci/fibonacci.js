const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  let sum = 1;
  let previous = 0;
  for (let i = 1; i < num; i++) {
    let temp = sum;
    sum += previous;
    previous = temp;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;

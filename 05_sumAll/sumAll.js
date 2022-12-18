const sumAll = function (num1, num2) {
  let sum = 0;
  let tempNum = 0;
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    return "ERROR";
  } else {
    if (num1 > num2) {
      tempNum += num1;
      num1 = 0;
      num1 += num2;
      num2 = 0;
      num2 += tempNum;
    }
    for (let i = 0; i < num2; i++) {
      sum += i + 1;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

const repeatString = function (string, num) {
  if (num >= 0) {
    let repeated = "";
    for (let i = 0; i < num; i++) {
      repeated += string;
    }
    return repeated;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;

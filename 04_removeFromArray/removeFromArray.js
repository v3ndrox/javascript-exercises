const removeFromArray = function (arr = [], ...anyArgs) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < anyArgs.length; j++) {
      if (arr[i] === anyArgs[j]) {
        arr.splice(i, 1);
        i = 0;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

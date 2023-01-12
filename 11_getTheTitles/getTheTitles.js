const getTheTitles = function (arr) {
  let books = [];
  for (bookName of arr) {
    books.push(bookName.title);
  }
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;

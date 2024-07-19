const book1 = {
  title: "Sorrow beyond dreams",
  author: "Peter Handke",
  year: "1996",
  getInfo: function () {
    return `Author: ${this.author} and Title: ${this.title}`;
  },
  update: function (year) {
    this.year = year;
    return this.year;
  },
};

const book2 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: "1925",
  getInfo: function () {
    return `Author: ${this.author} and Title: ${this.title}`;
  },
  update: function (year) {
    this.year = year;
    return this.year;
  },
};

const library = {
  books: [book1, book2],
};

// Log all keys and values of the book1 object
console.log("Keys of book1:", Object.keys(book1));
console.log("Values of book1:", Object.values(book1));

// Log keys and values of each book in the library object
console.log("Keys and values of each book in the library:");
library.books.forEach((book, index) => {
  console.log(`Book ${index + 1}:`);
  console.log("Keys:", Object.keys(book));
  console.log("Values:", Object.values(book));
});

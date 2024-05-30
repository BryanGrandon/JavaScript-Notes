"use strict";

// inside (static)

class User_1 {
  static staticMethod() {
    console.log(this === User_1);
  }
}
User_1.staticMethod();

// outside (function)

class User_3 {}
User_3.staticMethod = function () {
  console.log(this === User_2);
};
User_3.staticMethod();

// Example

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}
const articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2119, 11, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];
articles.sort(Article.compare);
console.log(articles[0].title);

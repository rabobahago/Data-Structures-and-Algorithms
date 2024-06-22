function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.infor = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages ${this.read}`;
  };
}

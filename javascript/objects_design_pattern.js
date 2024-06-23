function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.infor = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages ${this.read}`;
  };
}
const book = new Book("the old guys", "Rabo Yusuf", 244);
console.log(book.infor());
console.log(Object.getPrototypeOf(book) === Book.prototype);
console.log(book.__proto__ === Book.prototype);
console.log(Object.prototype.hasOwnProperty("valueOf"));
console.log(book.hasOwnProperty("valueOf"));

// remove prototype
const name = {};
const obj = Object.create(name);
console.log(Object.getPrototypeOf(obj) === Object.prototype);
function getName() {
  console.log(this);
}
getName();
const sale = {
  name: "reaf",
  age: 23,
  getDetail() {
    console.log(this);
    return null;
  },
  getName: function () {
    const getThis = () => {
      console.log(this);
    };
    getThis();
  },
};
console.log(sale.getDetail());
console.log(sale.getName());

const user = {
  firstName: "Rabo",
  lastname: "Yusuf",
  hobbies: ["nindem", "kafanchan"],
  getUser: function () {
    const getLast = () => {
      return this.lastname;
    };
    return getLast();
  },
  print: function () {
    return this.hobbies.map((hobby) => {
      console.log(hobby);
      console.log(this.firstName);
      return hobby + " " + this.firstName;
    });
  },
};
console.log(user.getUser());
console.log(user.print());

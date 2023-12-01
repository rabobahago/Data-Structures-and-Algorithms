// console.log(typeof null);
// console.log(typeof undefined);
// console.log(null === undefined);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
//let str = "JavaScript";
//str[0] = "j";

//console.log(str);
// console.log(0x23fac);
// console.log(0o345);
// console.log(0b111001);
// console.log(Boolean(8));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(Symbol()));
// console.log(Boolean(NaN));
// console.log(Boolean(false));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(undefined));
// console.log(parseInt("1011", 2));
// console.log(parseInt("1111.111", 2));
// const active = new Boolean(false);
// active.primitiveValue = active.valueOf();
// console.log(active.primitiveValue);
// let primitiveVal = true;
// primitiveVal.time = 4;

// console.log(primitiveVal.time);
// console.log(typeof active);
// console.log(typeof primitiveVal);
// console.log(primitiveVal instanceof Boolean);
// console.log(active instanceof Boolean);
// let str = "helllo";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// let arr = str.split("");
// arr[0] = "J";

// console.log(arr.join(""));
// console.log(arr[arr.length - 1]);
// console.log(str + " u");
// str += ",";
// str += " I";
// str += " you";
// str += " with";
// str += " all";
// str += " my";
// str += " heart";
// console.log(str);
// let num = 67;
// console.log(typeof String(num));
// console.log(typeof num.toString());
// let age = 23;
// let ageNum = 24;
// ++ageNum;
// console.log(age === ageNum);
// console.log(age === ageNum);
// const person = {
//   name: "s",
//   age: 23,
// };

// const another = person;
// another.age = 100;
// console.log(person.age === another.age);
// const array = [1, 2];
// let result = [];
// for (let i = 0; i < array.length; i++) {
//   result.push(array[i] + 1);
// }
// console.log(result);
// console.log(Array(10));
// let athletes = new Array(3); // creates an array with initial size 3
// let scores = new Array(1, 2, 3, 4, 6); // create an array with three numbers 1,2 3
// let signs = new Array("Red"); //
// console.log(signs);
// console.log(athletes);
// console.log(scores);
// let name = undefined ?? null ?? "Hello";
// console.log(name);
// let age = 23;
// console.log(age === 23 ? ++age : age);
// let obj = {
//   name: "Rabo",
//   getName: function () {
//     return this.name;
//   },
// };
// function Person(name, age) {
//   console.log(new.target);
//this = {}
// asign the value of name and age
// this.name = name;
// this.age = age;
// return this
//   this.getName = function () {
//     return this.name;
//   };
// }
// const pers = Person("Rabo", 23);
// console.log(pers);
// console.log(pers.name);
// console.log(pers.getName());
//this references the object that is current calling the function or method
//simple function
"use strict";
let counter = {
  count: 0,
  incCount: function () {
    return ++this.count;
  },
};
console.log(counter.incCount());
function get() {
  console.log(this === undefined);
}
get();

// method invocation
let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

console.log(car.getBrand()); // H
// constructor function
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};
const person = new Person("Rabo");
console.log(person.getName());

let age = {
  age: 60,
};
function getAge(age) {
  return age + this.age + " years old";
}
console.log(getAge.call(age, "I am "));
console.log(getAge.apply(age, ["I am "]));
const callAGe = getAge.bind(age);
console.log(callAGe("I am "));

function Car() {
  this.speed = 120;
}

Car.prototype.getSpeed = () => {
  return this.speed;
};

let c = new Car();
console.log(c.getSpeed());
let countries = {
  name: "Nigeria",
};
for (let n in countries) {
  console.log(n);
  console.log(countries[n]);
}
for (let n of Object.keys(countries)) {
  console.log(n);
}
for (let [n, t] of Object.entries(countries)) {
  console.log(n, t);
}
function message(name) {
  let age = 56;
  function sayHi() {
    return "Hi, my name is " + name + ", I am " + age + " years old";
  }
  return sayHi;
}
let hi = message("Rabo");
console.log(hi());

for (let i = 0; i <= 4; i++) {
  setTimeout(() => {
    console.log("index", i, " after", i, " seconds");
  }, i * 1000);
}
function userDetail() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved([{ name: "rabo", email: "raboyusuf94@gmail.com" }]);
    }, 1000);
  });
}
function onFufilled(user) {
  console.log(user);
}
const promise = userDetail();
promise.then(onFufilled);

function convertArray() {
  return Array.prototype.slice.call(arguments);
}
console.log(convertArray(1, 2, 4));

let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => a - b);

console.log(numbers);

let employees = [
  { name: "John Doc", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2010" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2010" },
];
const sortByName = employees.sort((a, b) => {
  let x = a.name.toUpperCase();
  let y = b.name.toUpperCase();
  return x === y ? 0 : x < y ? -1 : 1;
});
console.log(sortByName);

const sortByDate = employees.sort((a, b) => {
  let x = new Date(a.hireDate);
  let y = new Date(b.hireDate);
  return x - y;
});
console.log(sortByDate);

const sortByNameLength = employees.sort((a, b) => {
  return a.name.length - b.name.length;
});
console.log(sortByNameLength);

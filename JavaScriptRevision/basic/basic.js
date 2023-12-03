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
// "use strict";
// let counter = {
//   count: 0,
//   incCount: function () {
//     return ++this.count;
//   },
// };
// console.log(counter.incCount());
// function get() {
//   console.log(this === undefined);
// }
// get();

// // method invocation
// let car = {
//   brand: "Honda",
//   getBrand: function () {
//     return this.brand;
//   },
// };

// console.log(car.getBrand()); // H
// // constructor function
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getName = function () {
//   return this.name;
// };
// const person = new Person("Rabo");
// console.log(person.getName());

// let age = {
//   age: 60,
// };
// function getAge(age) {
//   return age + this.age + " years old";
// }
// console.log(getAge.call(age, "I am "));
// console.log(getAge.apply(age, ["I am "]));
// const callAGe = getAge.bind(age);
// console.log(callAGe("I am "));

// function Car() {
//   this.speed = 120;
// }

// Car.prototype.getSpeed = () => {
//   return this.speed;
// };

// let c = new Car();
// console.log(c.getSpeed());
// let countries = {
//   name: "Nigeria",
// };
// for (let n in countries) {
//   console.log(n);
//   console.log(countries[n]);
// }
// for (let n of Object.keys(countries)) {
//   console.log(n);
// }
// for (let [n, t] of Object.entries(countries)) {
//   console.log(n, t);
// }
// function message(name) {
//   let age = 56;
//   function sayHi() {
//     return "Hi, my name is " + name + ", I am " + age + " years old";
//   }
//   return sayHi;
// }
// let hi = message("Rabo");
// console.log(hi());

// for (let i = 0; i <= 4; i++) {
//   setTimeout(() => {
//     console.log("index", i, " after", i, " seconds");
//   }, i * 1000);
// }
// function userDetail() {
//   return new Promise((resolved, rejected) => {
//     setTimeout(() => {
//       resolved([{ name: "rabo", email: "raboyusuf94@gmail.com" }]);
//     }, 1000);
//   });
// }
// function onFufilled(user) {
//   console.log(user);
// }
// const promise = userDetail();
// promise.then(onFufilled);

// function convertArray() {
//   return Array.prototype.slice.call(arguments);
// }
// console.log(convertArray(1, 2, 4));

// let numbers = [0, 1, 2, 3, 10, 20, 30];
// numbers.sort((a, b) => a - b);

// console.log(numbers);

// let employees = [
//   { name: "John Doc", salary: 90000, hireDate: "July 1, 2010" },
//   { name: "David", salary: 75000, hireDate: "August 15, 2010" },
//   { name: "Ana", salary: 80000, hireDate: "December 12, 2010" },
// ];
// const sortByName = employees.sort((a, b) => {
//   let x = a.name.toUpperCase();
//   let y = b.name.toUpperCase();
//   return x === y ? 0 : x < y ? -1 : 1;
// });
// console.log(sortByName);

// const sortByDate = employees.sort((a, b) => {
//   let x = new Date(a.hireDate);
//   let y = new Date(b.hireDate);
//   return x - y;
// });
// console.log(sortByDate);

// const sortByNameLength = employees.sort((a, b) => {
//   return a.name.length - b.name.length;
// });
// console.log(sortByNameLength);

// const sum = employees.reduce((a, b) => a + b.salary, 0);
// console.log(sum);
// const filted = employees.filter((a) => {
//   return a.salary > 75000;
// });
// console.log(filted);
// const mapName = employees.map((a) => {
//   let name =
//     a.name === "Ana"
//       ? a.name + " Yusuf"
//       : a.name === "John Doc"
//       ? a.name
//       : a.name === "David"
//       ? a.name + " Dee"
//       : "";
//   let salary =
//     a.salary < 75000
//       ? a.salary + 100
//       : a.salary > 7500 && a.salary <= 79000
//       ? a.salary + 200
//       : a.salary + 30;
//   let hireDate = a.hireDate;
//   return { name, salary, hireDate };
// });
// console.log(mapName);

// let re = /[A-Z]/;
// let str = "hi There! How are you?";
// let index = str.search(re);

// console.log(index);
// let numb = "12345 ye uussjj";
// let ind = numb.search(/[a-z]/);
// console.log(ind);
// console.log("23556".padStart(8, "x"));
// console.log("5959".padEnd(9, 0));
// let email = "raboyusuf94@gmail.com";
// const domain = email.substring(email.indexOf("@") + 1);
// console.log(domain);
// const domainName = email.substr(0, email.indexOf("@"));
// console.log(domainName);
// function getName(str, str1) {
//   if (str.includes(str1)) return true;
//   return false;
// }

// console.log(getName("banner", "bang"));
// console.log(getName("hugging", "hug"));
function maxSubarraySum(arr) {
  let overallMax = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  for (let num of arr) {
    currentSum = Math.max(num, currentSum + num);
    overallMax = Math.max(currentSum, overallMax);
  }
  return overallMax;
}
const array1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(array1));

function maxSumSubarray(arr, k) {
  let windowSum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window through the array
  for (let i = k; i < arr.length; i++) {
    // Update the window sum by removing the leftmost element and adding the rightmost element
    windowSum = windowSum - arr[i - k] + arr[i];

    // Update the maximum sum
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Example usage:
const array2 = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const k = 3;
console.log(maxSumSubarray(array2, k));
function isContiguous(arr) {
  const n = arr.length;

  // Iterate through each element starting from the second
  for (let i = 1; i < n; i++) {
    // Check if the difference between consecutive elements is 1
    if (arr[i] - arr[i - 1] !== 1) {
      return false;
    }
  }

  // If all differences are 1, the array is contiguous
  return true;
}

// Example usage:
const array3 = [5, 6, 7, 8, 9];
console.log(isContiguous(array3)); // O

function twoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) return [arr[map.get(complement)], arr[i]];
    else map.set(arr[i], i);
  }
  return [];
}
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
let set = new Set();
set.add(2);
console.log(set);
const list = new Set([2, 4, 7, 2]);
console.log(list);

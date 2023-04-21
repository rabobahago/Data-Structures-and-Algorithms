//create an array with array literal and constructor
let arr = [];
for (let i = 0; i < 100; i++) {
  arr[i] = i + 1;
}
console.log(arr);
//create array from a string

var sentence = "the quick brown fox jumped over the lazy dog";
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
  console.log("word " + i + ": " + words[i]);
}
//shallow copy
let specialNums = [];
for (let i = 0; i < 100; i++) {
  specialNums[i] = i + 1;
}
let copyNums = specialNums;
copyNums[0] = 200000;
console.log(specialNums);
//deep copy
function deepCopy(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
  return arr2;
}
let names = ["joe", "jack", "mack"];
let copyNames = [];
console.log(deepCopy(names, copyNames));
copyNames.push("Rabo");
console.log(names);
console.log(copyNames);

//searching an array
let setence = "I love to code Javascript program";
let arrayWords = sentence.split(" ");
function getIndexOf(word) {
  let foundIndex = arrayWords.indexOf(word);
  if (foundIndex >= 0) {
    return "word " + word + " found at index " + foundIndex;
  }
  return "word " + word + " not found";
}
console.log(getIndexOf("Javascript"));
console.log(getIndexOf("You"));
//convert array to string: join and toString
let comments = ["I", "like", "JavaScript"];
console.log(comments.join());
console.log(comments.toString(""));
//creating new array from an existing one
let city = ["lagos", "kaduna"];
let northCity = ["Kano", "Katsina"];
let concatCity = city.concat(northCity);
console.log(concatCity);
//adding element into array
let add = [2, 3, 4, 5];
let one = 1;
for (let i = add.length - 1; i >= 0; i--) {
  if (add[i - 1]) {
    add[i] = add[i - 1];
  } else {
    add[0] = one;
  }
}
console.log(add);
let n = [1, 2, 3, 4, 5];
for (let i = 0; i < n.length; i++) {
  console.log(n[i]);
  console.log(n[i + 1]);
  if (!n[i + 1] || n[i + 1] === n[i]) {
    continue;
  } else {
    n[i] = n[i + 1];
  }
}
console.log(n);
//sort array element
let ar = [100, 2, 3, 400, 5, 6, 7, 8];
const sortedNum = ar.sort((a, b) => a - b);
console.log(sortedNum);
let lett = ["bulb", "week", "month"];
console.log(lett.sort());
//predicate
function even(n) {
  return n % 2 === 0;
}
let isEven = arr.every(even);
if (isEven) {
  console.log("The are all even Numbers");
} else {
  console.log("The are not all even numbers");
}
const isSomeEven = arr.some(even);
if (isSomeEven) {
  console.log("some are even number");
} else {
  console.log("some are not even number");
}
function sqaure(num) {
  console.log(num, num * num);
}
const nu = ar.forEach(sqaure);
console.log(nu);
//reduce
arrayWords = ["walk", "yellow", "green", "red"];
function concat(accumulator, word) {
  return accumulator + " " + word;
}
words = arrayWords.reduce(concat);
console.log(words);
//return new array
function convertNumToObj(n, ind) {
  return {
    n: n * n + " is the square of " + n + " at index " + ind,
  };
}
const transformArr = ar.map(convertNumToObj);
console.log(transformArr);
words = ["fun", "ear", "water"];
function firstLetter(word) {
  return word[0];
}
word = words.map(firstLetter);
console.log(word.join(""));

//filter
function greaterThanSixty(n) {
  return n > 60;
}
let randomTwentyNum = [];
for (let i = 0; i < 20; i++) {
  randomTwentyNum[i] = Math.floor(Math.random() * 100);
}
const numGreaterThanSixty = randomTwentyNum.filter(greaterThanSixty);
console.log(numGreaterThanSixty);

function content(n) {
  if (n.lastIndexOf("cei") >= 0) return true;
  return false;
}
words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
const mispelled = words.filter(content);
console.log(mispelled);
//two dimensional array
function twoDimensionalArray(num1, num2, initial) {
  let result = [];
  let n = initial;
  for (let i = 0; i < num1; i++) {
    let inner = [];
    for (let j = 0; j < num2; j++) {
      inner[j] = n + 1;
      n++;
    }
    result[i] = inner;
  }
  return result;
}
const twoDimensional = twoDimensionalArray(5, 5, 0);
let sum = 0;
for (let row = 0; row < twoDimensional.length; row++) {
  for (let col = 0; col < twoDimensional[row].length; col++) {
    sum += twoDimensional[row][col];
  }
}
console.log(sum);

nums = [
  [2, 4, 5],
  [1, 2],
  [3, 4, 6],
];
let total = 0;
let average = 0;
let result = [];
for (let row = 0; row < nums.length; ++row) {
  for (let col = 0; col < nums[row].length; ++col) {
    total += nums[row][col];
  }
  average = total / nums[row].length;
  result.push(average);
}
console.log(result);
function Point(x, y) {
  this.x = x;
  this.y = y;
}
let p1 = new Point(1, 2);
let p2 = new Point(2, 3);
let p3 = new Point(3, 4);
let p4 = new Point(4, 6);
let p = [p1, p2, p3, p4];
console.log(p);
for (let i = 0; i < p.length; i++) {
  console.log("x value:", p[i].x, "y value:", p[i].y);
}

// week average
function WeekTemperature() {
  this.storage = [];
  this.addition = addition;
  this.averageTemp = averageTemp;
}
function addition(temp) {
  this.storage.push(temp);
}
function averageTemp() {
  let total = 0;
  for (let i = 0; i < this.storage.length; i++) {
    total += this.storage[i];
  }
  return total / this.storage.length;
}
const weekTemp = new WeekTemperature();
weekTemp.addition(3);
weekTemp.addition(7);
console.log(weekTemp.averageTemp());

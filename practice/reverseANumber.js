// Write a program to reverse a given integer number
// A simple approach to reverse a number could also be to convert
// it in to a string and then reverse it

function reverseNum(num) {
  let str = String(num);
  let s = str.split("").reverse().join("");
  return String(s);
}
console.log(reverseNum(36737));

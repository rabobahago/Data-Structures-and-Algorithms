// Smaller Number With All the Same Integers
// You are given a non-negative integer N as an argument.
// Return a lesser valued integer that contains all of the same numbers as N.

// Requirements
// Must return an integer
// Example #1
// solve(654)
// > 645
// Example #2
// solve(7310)
// > 7301
const smallNumberWithInteger = (number) => {
  const str = number.toString().split("");
  const front = str.slice(0, str.length - 2);
  const back = str.slice(str.length - 2);
  const reversedFront = reverseStr(back);
  let result = [...front, ...reversedFront];
  return Number(result.join(""));
};
function reverseStr(arr) {
  return arr.reverse();
}
console.log(smallNumberWithInteger(654));
console.log(smallNumberWithInteger(7310));
console.log(smallNumberWithInteger(112244456));

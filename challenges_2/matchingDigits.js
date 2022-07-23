// Matching Digits from Two Integers
// You are given two non-negative integers as an argument. Return an array of integers containing the matching digits from the two integers.

// Requirements
// Must return an array of integers
// Example #1
// solve(3762, 72996)
// > [7,6,2]
// Example #2
// solve(1456, 172496)
// > [1,4,6]
const matchingDigits = (digitOne, digitTwo) => {
  let result = [];
  const first = Array.from(digitOne.toString());
  const second = Array.from(digitTwo.toString());
  for (let char of first) {
    if (second.includes(char)) {
      result.push(parseInt(char));
    }
  }
  return result;
};
console.log(matchingDigits(3762, 72996));
console.log(matchingDigits(1456, 172496));

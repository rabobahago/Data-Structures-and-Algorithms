// Find the K Middle Integers Between Two Integers
// You are given three integers, A,B and K as arguments. Return the K middle integers between A and B.

// Argument K will always be an odd number.

// Requirements
// Must return an array of integers
// Example #1
// solve(1,9,3)
// > [4,5,6]

// 5 is the median of 1 and 9. Since argument k is 3, we also return 4 and 6.

// Example #2
// solve(4,16,5)
// > [8,9,10,11,12]

// 10 is the median of 4 and 16. Since argument k is 5, we also return 8,9 and 11,12.
const kmiddleInteger = (a, b, k) => {
  let result = [];
  let middle = Math.floor((a + b) / 2);
  let kmiddle = Math.floor(k / 2);
  let start = middle - kmiddle;
  let end = middle + kmiddle;
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

console.log(kmiddleInteger(1, 9, 3));
console.log(kmiddleInteger(4, 16, 5));

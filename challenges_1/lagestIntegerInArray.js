//solution one
// const largestNumbersInArrays = (array) => {

//   return array.reduce((current, prev) => (current > prev ? current : prev));
// };
// console.log(largestNumbersInArrays([1, 5, 3, 7]));
// console.log(largestNumbersInArrays([1, -5, 3, -7]));

//solution two
// const largestNumbersInArrays = (array) => {
//   let max = -Infinity;
//   for (let num of array) {
//     max = Math.max(max, num);
//   }
//   return max;
// };
// console.log(largestNumbersInArrays([1, 5, 3, 7]));
// console.log(largestNumbersInArrays([1, -5, 3, -7]));
const largestNumbersInArrays = (array) => {
  let max = -Infinity;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};
console.log(largestNumbersInArrays([1, 5, 3, 7]));
console.log(largestNumbersInArrays([1, -5, 3, -7]));

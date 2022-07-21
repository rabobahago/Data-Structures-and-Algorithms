// 2D Array of Integers With Square Root Dimensions
// Given an integer K, return a 2D array of integers with dimensions sqrt(K) X sqrt(K) whose elements span the sequence from 1 to K.
// K will always have an integer square root (so K= 4, 9, 16, 25, etc) Ex: Given 9, return [ [1, 2, 3] [4, 5, 6] [7, 8, 9] ]
const squareRootDimensions = (k) => {
  let result = [];
  for (let i = 1; i <= k; i++) {
    let last = result[result.length - 1];
    if (!last || last.length === Math.sqrt(k)) {
      result.push([i]);
    } else {
      last.push(i);
    }
  }
  return result;
};
console.log(squareRootDimensions(9));

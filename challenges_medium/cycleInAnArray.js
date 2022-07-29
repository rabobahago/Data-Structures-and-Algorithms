// Cycle in an Array
// You are given an array of non-negative integers as an argument.
// Each integer element points to the index of the next element.
// Return true if there is a cycle in the array, false if not.

// A cycle would be found if the value of the array loops back to an element that it is already seen.

// Requirements
// Must return either true or false
// Example #1
// solve([1, 2, 1, 3])
// > true

// The value of the array is at the zero index. The element's value here is 1, so we go to the 1 index next.
// The value of the array is at the 1 index. The element's value here is 2, so we go to the 2 index next.
// The value of the array is at the 2 index. The element's value here is 1, so we go back to the 1 index next.
// We have already seen the 1 index before, so we have found a cycle and the program returns true.
// Example #2
// solve([1, 2, 3, 4, 5, 6])
// > false

// We do not revisit any indexes in the array, so we return false.
const cycleInAnArray = (array) => {
  let index = [];
  for (let i = 0; i < array.length; i++) {
    if (index.includes(array[i])) {
      return true;
    } else {
      index.push(array[i]);
    }
  }
  return false;
};
console.log(cycleInAnArray([1, 2, 1, 3]));
console.log(cycleInAnArray([1, 2, 3, 4, 5, 6]));

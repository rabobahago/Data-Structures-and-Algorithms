// You are given an array of integers and an array containing a range of integers (in the form of \[X, Y]) as arguments. Return an array containing all of the elements from the array of integers that are contained in the range.

// X will always be a smaller number than Y.

// There will always be at least one integer from the array found the X,Y range.

// Requirements
// Must return an array of integers
// Must work with both positive and negative integers
// Example #1
// solve([1,2,3,5,6,7], [2,6])
// > [3, 5]
// Example #2
// solve([1,2,3,4,5,10,20], [4,7])
// > [5]
const integersInRangeXy = (arrayA, range) => {
  let result = [];
  // sort the range in ascending order: ;
  range.sort((a, b) => a - b);
  //create numbers in between the second array arguments
  for (let i = range[0] + 1; i < range[1]; i++) {
    //check to see if the numbers generated
    //are included in the first array then push
    if (arrayA.includes(i)) {
      result.push(i);
    }
  }
  return result;
};
console.log(integersInRangeXy([1, 2, 3, 5, 6, 7], [2, 6]));
console.log(integersInRangeXy([1, 2, 3, 4, 5, 10, 20], [4, 7]));
console.log(integersInRangeXy([1, -3, -5, -6, 2, 3, -1, 8, 6, 9], [2, -10]));

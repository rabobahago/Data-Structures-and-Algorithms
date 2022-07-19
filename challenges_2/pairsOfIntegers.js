// Pairs of Integers
// You are given two sorted arrays of integers and an integer K as arguments. Find one integer from each array that sums up to the integer K and return the pair as an array of integers.

// Requirements
// Must return an array of two integers
// Example #1
// solve([1,2,3], [4,5,6], 8)
// > [2, 6]
// Example #2
// solve([1,2,3], [4,5,6], 9)
// > [3, 6]

const pairsOfIntegers = (arrayOne, arrayTwo, K) => {
  for (let i = 0; i < arrayOne.length; i++) {
    //we the track all the elements through diff
    let diff = K - arrayOne[i];
    //check if the diff is included in the
    //the second array
    if (arrayTwo.includes(diff)) {
      //early return so that other elements
      //will not be push
      return [arrayOne[i], diff];
    }
  }
};
console.log(pairsOfIntegers([1, 2, 3], [4, 5, 6], 8));
console.log(pairsOfIntegers([1, 2, 3], [4, 5, 6], 9));

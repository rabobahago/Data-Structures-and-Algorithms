// Find Equal Integer Pairs in an Array
// You are given an array containing multiple pairs of
// integers and an array with a single pair of integers as arguments. \
// Return true if any two pairs add up to the single pair, false if not.

// Requirements
// Must return either true or false
// Example #1
// solve([[1,2], [6,6], [10, 3]], [11,5])
// > true

// If we take arrays \[1,2] and \[10,3] we can them together to match our single pair argument \[11,5], so we return true.

// Example #2
// solve([[1,1], [6,6], [9, 3]], [11,5])
// > false

// There are no two pairs that will add up to the single pair argument \[11,5] so we return false.
const findEqualIntegersPairs = (arrayOne, arrayTwo) => {
  let [x1, y1] = arrayOne[0];
  for (let i = 1; i < arrayOne.length; i++) {
    const [x2, y2] = arrayOne[i];
    if (x1 + x2 === arrayTwo[0] && y1 + y2 === arrayTwo[1]) {
      return true;
    }
  }
  return false;
};
console.log(
  findEqualIntegersPairs(
    [
      [1, 2],
      [6, 6],
      [10, 3],
    ],
    [11, 5]
  )
);
console.log(
  findEqualIntegersPairs(
    [
      [1, 1],
      [6, 6],
      [9, 3],
    ],
    [11, 5]
  )
);

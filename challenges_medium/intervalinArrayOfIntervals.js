// Interval in an Array of Intervals
// You are given a two dimensional array containing arrays of intervals and
// an array K containing a single interval as arguments. Return true if
//  all of the intervals in the inner arrays are enclosed in the single interval K, false if not.

// Requirements
// Must return either true or false
// Example #1
// solve([[4,5],[6,7]], [3,8])
// > true

// The intervals 4 thru 7 are enclosed in the interval 3 thru 8 so we return true.

// Example #2
// solve([[2,5],[6,9]], [3,8])
// > false

// The intervals 2 thru 9 are not enclosed by the interval 3 thru 8 so we return false.
const intervalinArrayOfIntervals = (arrayOne, arrayTwo) => {
  const [one, two] = arrayOne;
  let startInnerInterval = one[0];
  let endInnerInterval = two[two.length - 1];
  let [startOuterInterval, endOuterInterval] = arrayTwo;
  if (
    startOuterInterval > startInnerInterval ||
    endOuterInterval < endInnerInterval
  ) {
    return false;
  }
  return true;
};
console.log(
  intervalinArrayOfIntervals(
    [
      [4, 5],
      [6, 7],
    ],
    [3, 8]
  )
);
console.log(
  intervalinArrayOfIntervals(
    [
      [2, 5],
      [6, 9],
    ],
    [3, 8]
  )
);

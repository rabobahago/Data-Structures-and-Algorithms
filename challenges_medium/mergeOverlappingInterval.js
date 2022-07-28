// Merge Overlapping Intervals
// You are given a two dimensional array containing arrays of
// intervals and a new interval array as arguments. Merge the inner
// arrays of intervals with the new interval so that there is no overlapping. Return the merged array of intervals.

// The 2D array of intervals will have no overlapping to start with.

// Requirements
// Must return a two dimensional array containing arrays of intervals
// Example #1
// solve([[1,2], [5, 9], [12, 14]], [11, 13])
// > [[1,2], [5,9], [11, 14]]

// We determine that intervals \[1,2] and \[5,9] do not overlap with \[11,14].
// We determine that \[12, 14], \[11, 13] do overlap with \[11,14], so they are merged and become \[11, 14].
// We return the new merged array of intervals \[\[1,2], \[5,9], \[11, 14]\]
const mergeOverlappingIntervals = (array, array2) => {
  let final = [];
  let result = [];
  let flatArray = array.flat();
  let first = array2[0];
  let start;
  let sortedBoth = [...flatArray, ...array2].sort((a, b) => a - b);
  let last = sortedBoth[sortedBoth.length - 1];
  for (let i = 0; i < sortedBoth.length; i++) {
    if (sortedBoth[i] === first) {
      result.push(sortedBoth.slice(0, i));
      start = sortedBoth[i];
    }
  }
  let k = 2;
  let index = 0;
  let t = result.flat();
  console.log(t);
  let intervals = [start, last];
  while (index < t.length) {
    final.push(t.slice(index, k));
    t = t.slice(k);
  }
  final.push(intervals);
  return final;
};
console.log(
  mergeOverlappingIntervals(
    [
      [1, 2],
      [5, 9],
      [12, 14],
    ],
    [11, 13]
  )
);

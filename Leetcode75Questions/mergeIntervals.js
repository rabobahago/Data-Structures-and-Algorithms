// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
//and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
const mergeInvervals = () => {
  // sort by it starting time
  intervals.sort((a, b) => a[0] - b[0]);
  //push first array into the result
  let result = [intervals[0]];
  for (let interval of intervals) {
    //get the last element in the result
    let e1 = result[result.length - 1][1];
    // start element of interval
    let s2 = interval[0];
    //end element of interval
    let e2 = interval[1];
    if (e1 >= s2) {
      //pick max b/w e1 and e2 to replace it as new result last value
      result[result.length - 1][1] = Math.max(e1, e2);
    } else {
      //else push interval into result
      result.push(interval);
    }
  }
  return result;
};
console.log(
  mergeInvervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

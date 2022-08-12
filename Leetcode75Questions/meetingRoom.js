//Meeting Room
// Description
// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: true
const meetingRoom = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let end = [intervals[0][1]];
  for (let i = 1; i < intervals.length; i++) {
    let s = intervals[i][0];
    if (end > s) return false;
  }
  return true;
};
console.log(
  meetingRoom([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
console.log(
  meetingRoom([
    [7, 10],
    [2, 4],
  ])
);

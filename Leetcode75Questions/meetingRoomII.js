// We will be given an array of arrays, each subarray consists of exactly two elements indicating the start and end time of a meeting.

// The task of our function is to find the maximum number of meetings one person can take avoiding the conflict of time. The function should finally return this number.

// For example −

// If the input array describing meeting times is −

// const arr = [[5, 40], [10, 20], [25, 35]];
// Then the output should be −

// const output = 2;
// because it's not possible to take all three meetings due to overlapping times but [10, 20] and [25, 35] can be attended.
const meetingRoomII = (intervals) => {
  let room = 0;
  if (intervals.length < 2) return 1;
  let roomTime = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < roomTime[roomTime.length - 1][1]) {
      room++;
    } else {
      roomTime.push(intervals[i][0]);
    }
  }
  return room;
};
console.log(
  meetingRoomII([
    [7, 10],
    [2, 4],
  ])
);
console.log(
  meetingRoomII([
    [5, 40],
    [10, 20],
    [25, 35],
  ])
);

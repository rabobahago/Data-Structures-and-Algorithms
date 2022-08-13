//1010. Pairs of Songs With Total Durations Divisible by 60
// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.
var numPairsDivisibleBy60 = function (time) {
  let output = 0;

  let map = new Map();
  for (let seconds of time) {
    let reminder = seconds % 60;
    if (!map.has(reminder)) {
      map.set(reminder, 1);
    } else {
      map.set(reminder, map.get(reminder) + 1);
    }
  }

  for (let [reminder, freq] of map) {
    let numToFind = (60 - reminder) % 60;
    if (map.has(numToFind) && numToFind === reminder) {
      output += helper(map.get(numToFind));
    } else if (map.has(numToFind)) {
      output += (map.get(numToFind) * map.get(reminder)) / 2;
    }
  }

  function helper(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += i;
    }
    return sum;
  }

  return output;
};
console.log(numPairsDivisibleBy60([60, 60, 60]));
console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));

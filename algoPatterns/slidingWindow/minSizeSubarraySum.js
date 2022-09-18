// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr]
// of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
const minSubArrayLen = (target, nums) => {
  let min = Infinity;
  let currentSum = 0;
  let startWindow = 0;
  for (let endWindow = 0; endWindow < nums.length; endWindow++) {
    currentSum += nums[endWindow];
    while (currentSum >= target) {
      min = Math.min(min, endWindow - startWindow + 1);
      currentSum -= nums[startWindow];
      startWindow++;
    }
  }
  return min === Infinity ? 0 : min;
};
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(4, [1, 4, 4]));

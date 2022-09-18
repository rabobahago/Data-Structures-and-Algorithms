// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return
// this value. Any answer with a calculation error less than 10-5 will be accepted.

//slide window approach: Time Complexity O(n) and space complexity O(1)
const findMaxAverageWindow = function (nums, k) {
  let max = -Infinity;
  let currSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (i >= k - 1) {
      max = Math.max(currSum, max);
      currSum -= nums[i - (k - 1)];
    }
  }
  let average = max / k;
  return average;
};
console.log(findMaxAverageWindow([1, 12, -5, -6, 50, 3], 4));

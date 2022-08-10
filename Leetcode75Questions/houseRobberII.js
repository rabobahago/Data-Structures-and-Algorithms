// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3
// const houseRobberII = (nums) => {
//   const withoutLast = nums.slice(0, nums.length - 1);
//   const withoutFirst = nums.slice(1);
//   let maxOne = robHelper(withoutFirst);
//   let maxTwo = robHelper(withoutLast);
//   return maxOne, maxTwo;
// };
var rob = function (nums) {
  // Handle base case
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // Return the max between the subarray if we starting robbing at the first house or if we started robbing at the second house
  return Math.max(
    helper(nums.slice(0, nums.length - 1)),
    helper(nums.slice(1))
  );
};
//this is the robber I, which is now helper of robber II
const helper = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let dp = Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[dp.length - 1];
};
console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 2, 3]));

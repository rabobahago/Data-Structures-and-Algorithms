// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
//first solution time O(n^2) and space O(n)
const longestIncreasingSubsequence = function (nums) {
  let dp = new Array(nums.length);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    // local max
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // console.log(dp[j]);
        max = Math.max(dp[j], max);
      }
    }
    dp[i] = max + 1;
  }
  // result: find the max of all dp[i]'s
  return Math.max(...dp);
};
console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
//second solution
// time O(nlogn) and space O(n)
var lengthOfLIS = function (nums) {
  let sortedArr = [];
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let insertIndex = binarySearch(sortedArr, nums[i]);
    sortedArr.splice(insertIndex, 1, nums[i]);

    maxLen = Math.max(insertIndex + 1, maxLen);
  }

  return maxLen;
};

function binarySearch(arr, el) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == el) {
      return mid;
    } else if (arr[mid] > el) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

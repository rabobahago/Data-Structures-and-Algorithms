//15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

const threeSum = (nums) => {
  let result = [];
  //the elements must be sorted in ascending order because want to use multiple pointers
  nums.sort((a, b) => a - b);
  //our loop most stop nums.length-2 because is three pointers we will be using
  for (let i = 0; i < nums.length - 2; i++) {
    //note that for the second and third poniters since i starts at zero
    //j will start at i + 1 while k will be the last element
    let j = i + 1;
    let k = nums.length - 1;
    //check for duplicate while i greater than zero
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    //while j does not cross k
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        //when sum is zero, push array of each element at that index to the solution array
        result.push([nums[i], nums[j], nums[k]]);
        //check for duplicate
        while (nums[j] === nums[j + 1]) j++;
        //check for duplicate
        while (nums[k] === nums[k + 1]) k--;
        //do not matter whether there is duplicate or not we will still increase j and decrease k
        j++;
        k--;
      } else if (sum < 0) {
        //when sum is less than 0, increase j
        j++;
      } else {
        //when sum is greater than 0, decrease k
        k--;
      }
    }
  }
  return result;
};

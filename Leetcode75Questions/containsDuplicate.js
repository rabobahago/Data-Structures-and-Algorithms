// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//solution one: 99.75% fast
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

// solution two: 99.09% fast
// var containsDuplicate = function (nums) {
//   let contains = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (contains.has(nums[i])) return true;
//     else contains.add(nums[i]);
//   }
//   return false;
// };
// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// solution three: 10.45% fast
// var containsDuplicate = function (nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (result.includes(nums[i])) {
//       return true;
//     } else {
//       result.push(nums[i]);
//     }
//   }
//   return false;
// };

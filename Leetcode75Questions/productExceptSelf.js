// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
let productExceptSelf = function (nums) {
  let leftValue = [];
  let rightValue = [];
  let solution = [];
  for (let i = 0; i < nums.length; i++) {
    //if the is value inside the left Value
    //push 1
    if (leftValue.length === 0) {
      leftValue.push(1);
    } else {
      leftValue.push(leftValue[i - 1] * nums[i - 1]);
    }
  }
  console.log(leftValue);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (rightValue.length === 0) {
      rightValue.push(1);
    } else {
      //remember to always unshift because is from right to left
      //remember also you will always get the value from the front
      //that is why rightValue[0]
      //remember also that you getting num[i + 1] because you want access to right most values;
      rightValue.unshift(rightValue[0] * nums[i + 1]);
    }
  }
  console.log(rightValue);
  for (let i = 0; i < nums.length; i++) {
    //multiple the two and push to the solution array
    solution.push(rightValue[i] * leftValue[i]);
  }
};

console.log(productExceptSelf([1, 2, 3, 4]));
//output before: [1, 1, 1, 1];
//output after: [1, 2, 6, 24]

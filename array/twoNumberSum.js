// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   let hashTable = {};
//   for (let i = 0; i < array.length; i++) {
//     let char = array[i];
//     let targetDiff = targetSum - char;
//     if (targetDiff in hashTable) {
//       return [char, targetDiff];
//     } else {
//       hashTable[char] = true;
//     }
//   }
//   return [];
// }

const findTwoSum = (nums, target) => {
  if (nums.length === 0 || nums.length === 1) return [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
};
console.log(findTwoSum([2, 3, 4, 5, 10], 9));
// Time O(n^2)
// space O(1)

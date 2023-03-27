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
const optimalSolution = (nums, target) => {
  let numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    let currentMapVal = numsMap[nums[i]];
    if (currentMapVal >= 0) {
      return [currentMapVal, i];
    } else {
      const numToFind = target - nums[i];
      numsMap[numToFind] = i;
    }
  }
  return null;
};
//Time O(n)
//Time O(n)
console.log(optimalSolution([2, 3, 4, 5, 10], 9));

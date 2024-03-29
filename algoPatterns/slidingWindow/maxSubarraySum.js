//slide window approach: Time Complexity O(n) and space complexity O(1)
const maxSubarraySumWindow = (array, size) => {
  let max = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
    if (i >= size - 1) {
      max = Math.max(max, currentSum);
      currentSum -= array[i - (size - 1)];
    }
  }
  return max;
};
console.log(maxSubarraySumWindow([2, 4, 5, 6, 7, 7], 3));

//Brute Force Approach: Time Complexity O(n^2) and Space complexity O(1)
const maxSubarraySum = (arr, k) => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < k + i; j++) {
      sum += arr[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

console.log(maxSubarraySum([2, 4, 5, 6, 7, 7], 3));

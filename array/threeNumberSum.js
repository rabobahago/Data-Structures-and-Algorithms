function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort(function (a, b) {
    return a - b;
  });
  let result = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let sum = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else if (sum > targetSum) {
        right--;
      }
    }
  }
  return result;
}

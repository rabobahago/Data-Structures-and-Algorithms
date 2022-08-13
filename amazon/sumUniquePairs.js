function twoSumUniquePairs(nums, target) {
  const complements = {};
  let output = 0;
  for (num of nums) {
    if (!complements[num]) {
      complements[num] = 1;
    }
    if (
      complements[target - num] &&
      complements[num] === 1 &&
      complements[target - num] === 1
    ) {
      complements[target - num]++;
      output++;
    }
  }
  return output;
}

// The shipment imbalance of a shipment is defined as the difference between the max and min weight within a shipment. Give the arrangement of parcels, find the maxImbalance.
// Input:
// List arrangement = {1, 2, 3}

// output: 4
// diff1 = 1 - 1 = 0;
// diff2 = 2 - 2 = 0;
// diff3 = 3 - 3 = 0;
// diff4 = 2 - 1 = 1;
// diff5 = 3 - 2 = 1;
// diff6 = 3 - 1 = 2;
const subArrayRanges = (nums) => {
  const len = nums.length;
  let subRangeSum = 0;
  for (let i = 0; i < len; i++) {
    let min = nums[i];
    let max = nums[i];
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < min) {
        min = nums[j];
      }
      if (nums[j] > max) {
        max = nums[j];
      }
      const diff = max - min;
      subRangeSum += diff;
    }
  }
  return subRangeSum;
};
console.log(subArrayRanges([1, 2, 3]));

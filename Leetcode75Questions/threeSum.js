const threeSum = (nums) => {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    //check for duplicate
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        //check for duplicate
        while (nums[j] === nums[j + 1]) j++;
        //check for duplicate
        while (nums[k] === nums[k + 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};

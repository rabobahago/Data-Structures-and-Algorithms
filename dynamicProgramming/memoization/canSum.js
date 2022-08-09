//time complexity of O(n^m) and  O(m)
const canSum = (target, numbers) => {
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of numbers) {
    let remainder = target - num;
    if (canSum(remainder, numbers) === true) return true;
  }
  return false;
};
console.log(canSum(3, [2, 3, 4, 5, 6, 7]));

//time complexity of O(n*m) and  O(m)
const canSums = (target, numbers, memo = {}) => {
  if (target in memo) return true;
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of numbers) {
    let remainder = target - num;
    if (canSums(remainder, numbers, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return memo[target];
};
console.log(canSum(3, [2, 3, 4, 5, 6, 7]));
console.log(canSum(300, [7, 4, 2, 1, 2, 3]));

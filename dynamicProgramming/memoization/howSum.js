// time complexity of O(n^m *m) and O(m)
const howSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of numbers) {
    let remainder = target - num;
    let returnSum = howSum(remainder, numbers);
    if (returnSum !== null) {
      return [...returnSum, num];
    }
  }
  return null;
};
console.log(howSum(3, [2, 3, 4, 6]));
//console.log(howSum(300, [7, 14]));

//memoize solution
//time O(n * m) and space o(n)
const howSums = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of numbers) {
    let remainder = target - num;
    let returnSum = howSums(remainder, numbers, memo);
    if (returnSum !== null) {
      memo[target] = [...returnSum, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
};

console.log(howSums(3, [2, 3, 4, 6]));
console.log(howSums(300, [7, 14]));

//time complexity O(n^m * m) and space O(m ^2)
//brute force approach
const bestSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;
  let shortest = null;
  for (let num of numbers) {
    let remainder = target - num;
    const combination = bestSum(remainder, numbers);
    if (combination !== null) {
      let arrayCom = [...combination, num];
      if (shortest === null || arrayCom.length < shortest?.length) {
        shortest = arrayCom;
      }
    }
  }
  return shortest;
};
console.log(bestSum(8, [2, 3, 5]));

// time O(n^m * m) and Space O(m^2)
//best approach
const bestSums = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  let shortest = null;
  for (let num of numbers) {
    let remainder = target - num;
    const combination = bestSums(remainder, numbers, memo);
    if (combination !== null) {
      let arrayCom = [...combination, num];
      if (shortest === null || arrayCom.length < shortest.length) {
        shortest = arrayCom;
      }
    }
  }
  memo[target] = shortest;
  return shortest;
};
console.log(bestSum(8, [2, 3, 5]));

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

//time complexity O(n^m * m) and space O(m ^2)

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

// time O(n^2 * m) and Space O(m^2)
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

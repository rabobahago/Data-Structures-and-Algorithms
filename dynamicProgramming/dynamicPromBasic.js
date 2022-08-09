//time O(2^n) exponential and space complexity O(n)
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));
//time complexity of O(n) and space(n)
//this is known as memoization
function fibbonuci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibbonuci(n - 1) + fibbonuci(n - 2);
  return memo[n];
}
console.log(fibbonuci(20));

//time complexity O(2^n + m) and space of O(m + n)
const gridTravelers = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTravelers(m - 1, n) + gridTravelers(m, n - 1);
};
console.log(gridTravelers(2, 3));
console.log(gridTravelers(3, 3));

//this is known as memoization of gridTraveler
//the  complexity of O(m * n) and space complexity O(m + n)
const gridTraveler = (m, n, memo = {}) => {
  let key = m + ", " + n; //common gotchas in JavaScript
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  if (key in memo) return memo[key];
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(10, 10));
console.log(gridTraveler(20, 20));
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
  return false;
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

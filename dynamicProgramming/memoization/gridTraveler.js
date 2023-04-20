//time complexity O(2^n + m) and space of O(m + n)
//brute force approach
const gridTravelers = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTravelers(m - 1, n) + gridTravelers(m, n - 1);
};
console.log(gridTravelers(2, 3));
console.log(gridTravelers(3, 3));

//this is known as memoization of gridTraveler
//the  Time complexity of O(m * n) and space complexity O(m + n)
//best approach
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

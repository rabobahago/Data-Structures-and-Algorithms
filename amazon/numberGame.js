//1799. Maximize Score After N Operations
// You are given nums, an array of positive integers of size 2 * n. You must perform n operations on this array.

// In the ith operation (1-indexed), you will:

// Choose two elements, x and y.
// Receive a score of i * gcd(x, y).
// Remove x and y from nums.
// Return the maximum score you can receive after performing n operations.

// The function gcd(x, y) is the greatest common divisor of x and y.

// Example 1:

// Input: nums = [1,2]
// Output: 1
// Explanation: The optimal choice of operations is:
// (1 * gcd(1, 2)) = 1
// Example 2:

// Input: nums = [3,4,6,8]
// Output: 11
// Explanation: The optimal choice of operations is:
// (1 * gcd(3, 6)) + (2 * gcd(4, 8)) = 3 + 8 = 11
// Example 3:

// Input: nums = [1,2,3,4,5,6]
// Output: 14
// Explanation: The optimal choice of operations is:
// (1 * gcd(1, 5)) + (2 * gcd(2, 4)) + (3 * gcd(3, 6)) = 1 + 4 + 9 = 14
//calculates the next higher number with the same number of set bits with x
let snoob = (x) => {
  let rightOne = x & -x;
  let nextHigherOneBit = x + rightOne;
  let rightOnesPattern = x ^ nextHigherOneBit;
  rightOnesPattern = rightOnesPattern / rightOne;
  rightOnesPattern >>= 2;
  let next = nextHigherOneBit | rightOnesPattern;
  return next;
};
let gcd = (a, b) => {
  while (b) {
    a = a % b;
    let temp = a;
    a = b;
    b = temp;
  }
  return a;
};

const maxScore = (A) => {
  let n = A.length,
    gc = [...Array(n)].map((d) => [...Array(n)]),
    dp = [...Array(1 << n)].map((d) => 0);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (j != i)
        (gc[i][j] = gcd(A[i], A[j])), //pre-store the gcds of any pair of indices
          (dp[(1 << i) | (1 << j)] = gc[i][j]); //basecase for dp

  for (
    let t = 1;
    t < n / 2;
    t++ //turn
  )
    for (
      let mask = (1 << (t * 2)) - 1;
      mask < 1 << n;
      mask = snoob(mask) //curmask
    )
      for (let i = 0; i < n; i++)
        for (
          let j = i + 1;
          j < n;
          j++ //select 2 new elements to  append
        )
          if ((mask & ((1 << i) | (1 << j))) === 0)
            // I said NEW elements, so the intersection needs to be 0
            dp[mask | ((1 << i) | (1 << j))] = Math.max(
              dp[mask | ((1 << i) | (1 << j))],
              dp[mask] + (t + 1) * gc[i][j]
            );

  return dp[(1 << n) - 1];
};
console.log(maxScore([1, 2]));
console.log(maxScore([3, 4, 6, 8]));
console.log(maxScore([1, 2, 3, 4, 5, 6]));

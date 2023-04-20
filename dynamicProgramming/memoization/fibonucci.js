// Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

// The 0-th number of the sequence is 0.

// The 1-st number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous two numbers.

// Solve this recursively.

// test_00:
// fib(0); // -> 0
// test_01:
// fib(1); // -> 1
// test_02:
// fib(2); // -> 1
// test_03:
// fib(3); // -> 2
// test_04:
// fib(4); // -> 3
// test_05:
// fib(5); // -> 5
// test_06:
// fib(35); // -> 9227465
// test_07:
// fib(46); // -> 1836311903

//time O(2^n) exponential and space complexity O(n)
//brute force approach: that is this code is currect but not efficiency
function fib(n) {
  if (n === 2 || n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));
//time complexity of O(n) and space(n)
//this is known as memoization
function fibbonuci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibbonuci(n - 1, memo) + fibbonuci(n - 2, memo);

  return memo[n];
}
console.log(fibbonuci(50));
console.log(fibbonuci(1000));

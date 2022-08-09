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

function getNthFib(n, memo = { 1: 0, 2: 1 }) {
  // Write your code here.
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
  return memo[n];
}

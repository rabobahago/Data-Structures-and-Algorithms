//write a function `fib` that takes in a number n and returns n-th numbers in the fibonacci sequence
//The first two number of fib series 1 and 1.

function fib(n) {
  if (n === 2 || n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(7));
//Time O(2^n)
//Space O(n)

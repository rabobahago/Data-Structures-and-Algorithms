// Prime Numbers Less Than Argument
// You are given a non-negative integer as an argument. Return an array of integers containing all of the prime numbers less than the argument number in ascending numerical order.

// Requirements
// Must return an array of integers
// Example #1
// solve(20)
// > [2, 3, 5, 7, 11, 13, 17, 19]

const primeNumberLessThan = (N) => {
  let result = [];
  for (let i = 2; i < N; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
};

const isPrime = (number) => {
  let prime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};
console.log(primeNumberLessThan(20));

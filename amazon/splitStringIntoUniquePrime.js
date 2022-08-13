// Given numeric string str, the task is to count the number of ways the given string can be split, such that each segment is a prime number. Since the answer can be large, return the answer modulo 109 + 7.
// Note: A split that contains numbers with leading zeroes will be invalid and the initial string does not contain leading zeroes.
// Examples:

// Input: str = “3175”
// Output: 3
// Explanation:
// There are 3 ways to split this string into prime numbers which are (31, 7, 5), (3, 17, 5), (317, 5).
// Input: str = “11373”
// Output: 6
// Explanation:
// There are 6 ways to split this string into prime numbers which are (11, 3, 7, 3), (113, 7, 3), (11, 37, 3), (11, 3, 73), (113, 73) and (11, 373).

let MOD = 1000000007;
let sieve = new Array(1000000);

// Function to build sieve
function buildSieve() {
  for (let i = 0; i < sieve.length; i++) {
    sieve[i] = true;
  }

  sieve[0] = false;
  sieve[1] = false;

  for (let p = 2; p * p <= 1000000; p++) {
    // If p is a prime
    if (sieve[p] == true) {
      // Update all multiples
      // of p as non prime
      for (let i = p * p; i < 1000000; i += p) sieve[i] = false;
    }
  }
}

// Function to check whether a number
// is a prime number or not
function isPrime(number) {
  let num = parseInt(number);
  return sieve[num];
}

// Function to find the count
// of ways to split String
// into prime numbers
function rec(number, i, dp) {
  if (dp[i] != -1) return dp[i];
  let cnt = 0;

  for (let j = 1; j <= 6; j++) {
    // Number should not have a
    // leading zero and it
    // should be a prime number
    if (
      i - j >= 0 &&
      number[i - j] != "0" &&
      isPrime(number.substring(i - j, i))
    ) {
      cnt += rec(number, i - j, dp);
      cnt %= MOD;
    }
  }
  return (dp[i] = cnt);
}

// Function to count the
// number of prime Strings
function countPrimeStrings(number) {
  let n = number.length;
  let dp = new Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    dp[i] = -1;
  }

  dp[0] = 1;

  return rec(number, n, dp);
}

// Driver code
buildSieve();
let s1 = "3175";
console.log(countPrimeStrings(s1));
console.log(countPrimeStrings("11373"));

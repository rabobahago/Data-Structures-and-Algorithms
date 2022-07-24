// Strings as Operators
// You are given an array of integers and a string representing a "conditional" as arguments. Return a new array of integers where every element passes the conditional test provided by the string.

// Only the symbols >, <, <=, >=, and == will be used.

// Requirements
// Must return an array of integers
// Example #1
// solve([1,2,3,4,5], "<3")
// > [1,2]
// *All integers less than 3 are returned in the array.

// Example #2
// solve([1,2,3,4,5,3], "==3")
// > [3,3]
// Only integers equal to 3 are returned in the array.

// Example #3
// solve([1,2,3,4,5], ">=4")
// > [4,5]
// Integers greater than or equal to 4 are returned in the array.
const stringArray = (a, t) => {
  const [c, n] = t.match(/^[><=]=?|\d*$/g);
  switch (c) {
    case ">":
      return a.filter((i) => i > n);
    case ">=":
      return a.filter((i) => i >= n);
    case "<":
      return a.filter((i) => i < n);
    case "<=":
      return a.filter((i) => i <= n);
    case "==":
      return a.filter((i) => i == n);
  }
};
console.log(stringArray([1, 2, 3, 4, 5], "<3"));
console.log(stringArray([1, 2, 3, 4, 5, 3], "==3"));
console.log(stringArray([1, 2, 3, 4, 5], ">=4"));

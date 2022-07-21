// Sum Each Digit of an Integer
// You are given a non-negative integer as an argument. Add each digit of the integer together and return the sum.

// Requirements
// Must return an integer
// Example #1
// solve(6368206)
// > 31
// Adding each digit of the integer argument 6+3+6+8+2+0+6 gives us 31.

const sumEachDigitOfInteger = (string) => {
  let sum = 0;
  for (let char of string.toString()) {
    sum += parseInt(char);
  }
  return sum;
};
console.log(sumEachDigitOfInteger(6368206));

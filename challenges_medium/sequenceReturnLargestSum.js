// Sequence That Returns Largest Sum
// You are given an array of integers and an integer K as arguments.
// Return the continuous sequence of integers that is exactly
// K long and results in the largest sum.

// The array argument will always be at least K elements long.

// Requirements
// Must return an array of integers
// The original order of the array should be maintained.
// Example #1
// solve([100, 101, 0, 0, 9999], 3)
// > [0, 0, 9999]
// (100+101+0=201), (101+0+0=101) and (0+0+9999=9999) so we return \[0,0,9999]

// Example #2
// solve([100, 101, -2, 0, -35, 75], 2)
// > [100, 101]
// (100+101=201), (101-2=99), (-2+0=-2), (0-35=-35) and (-35+75=40) so we return \[100,101]

const sequenceReturnLargestSum = (array, k) => {
  let result;
  let largest = -Infinity;
  let index = 0;
  while (index < array.length) {
    const subArray = array.slice(index, index + k);
    console.log(subArray);
    const sum = subArray.reduce((acc, curr) => acc + curr, 0);
    if (subArray.length === k && sum >= largest) {
      largest = sum;
      result = subArray;
    }
    index++;
  }
  return result;
};
console.log(sequenceReturnLargestSum([100, 101, 0, 0, 9999], 3));
console.log(sequenceReturnLargestSum([100, 101, -2, 0, -35, 75], 2));

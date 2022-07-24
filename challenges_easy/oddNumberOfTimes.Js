// Find String in Array That is Repeated an Odd Number of Times
// You are given an array of lowercase single word strings containing some
// duplicates as an argument. Return the string that is duplicated an odd number of times.

// The argument array will only ever have one string that matches this criteria.

// Requirements
// Must return a single string
// Example #1
// solve(['apple', 'orange', 'banana', 'apple', 'apple', 'orange', 'banana'] )
// > "apple"
const oddNumberOfTimes = (array) => {
  let group = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (!(num in group)) group[num] = 1;
    else group[num]++;
  }
  for (let char in group) {
    if (group[char] % 2 === 1) {
      return char;
    }
  }
  return -1;
};
console.log(
  oddNumberOfTimes([
    "apple",
    "orange",
    "banana",
    "apple",
    "apple",
    "orange",
    "banana",
  ])
);

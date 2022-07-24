// Find the Non-duplicated String
// You are given an array of strings containing some duplicates as an argument. Return the string that is not duplicated.

// The argument array will only have one string that matches this criteria.

// Requirements
// Must return a single string
// Example #1
// solve(["orange", "apple", "banana", "apple", "orange"] )
// > "banana"

const nonDuplicateString = (array) => {
  let group = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (!(num in group)) group[num] = 1;
    else group[num]++;
  }
  for (let char in group) {
    if (group[char] === 1) {
      return char;
    }
  }
  return -1;
};
console.log(
  nonDuplicateString(["orange", "apple", "banana", "apple", "orange"])
);

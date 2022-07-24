// Character Appears Even Number of Times
// You are given a lowercase string as an argument. Return true if each character in the string is shown an even number of times, false if not.

// Requirements
// Must return either true or false
// Example #1
// solve("aabbccdd")
// > true

// All characters are seen twice, an even numbered of times, so we return true.

// Example #2
// solve("abcdeffgg")
// > false

// a,b,c,d and e are seen only once, an odd numbers times, so we return false.

const characterEvenTimes = (string) => {
  if (string.length === 0) return false;
  let result = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!(char in result)) result[char] = 1;
    else result[char]++;
  }
  for (let char in result) {
    if (result[char] < 2) return false;
  }
  return true;
};
console.log(characterEvenTimes("aabbccdd"));
console.log(characterEvenTimes("abcdeffgg"));
console.log(characterEvenTimes(""));

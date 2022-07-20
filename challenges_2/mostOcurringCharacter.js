// Find the Most Frequently Occurring Character
// You are given a string and integer K as arguments. Return the Kth most frequently occurring character.

// Requirements
// Must return a single character string
// Example #1
// solve("aaabbc", 2)
// > "b"
// Example #2
// solve("bbbbxyyzzz", 3)
// > "y"

const mostOccurringCharacter = (string, k) => {
  let ocurredChar = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!(char in ocurredChar)) ocurredChar[char] = 1;
    else ocurredChar[char]++;
  }
  const sortChar = Object.keys(ocurredChar).sort(
    (a, b) => ocurredChar[a] - ocurredChar[b]
  );
  return sortChar[sortChar.length - k];
};

console.log(mostOccurringCharacter("aaabbc", 2));
console.log(mostOccurringCharacter("bbbbxyyzzz", 3));

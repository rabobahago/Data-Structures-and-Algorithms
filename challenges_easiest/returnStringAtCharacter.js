// Return String at Character
// You are given a string containing multiple newline characters \n and a positive integer K, representing the line number, as arguments. Return the line of text at integer K.

// Newline character should be omitted from the returned string

// Requirements
// Must return a string
// Must work with spaces separating words in the string
// Must work with lower and uppercase characters.
// Example #1
// solve("apples\nmilk\nbread\nfish\n", 2)
// > "milk"
// Example #2
// solve("Beverly Hills\nSagaponack\nSanta Monica\n", 1)
// > "Beverly Hills"
const returnStringAtCharacter = (string, k) => {
  //   let splitArray = string.split("\n");
  //   const returnString = splitArray.slice(k - 1, k);
  //   return returnString.join("");
  //time O(n) and space O(1)
  return string
    .split("\n")
    .slice(k - 1, k)
    .join();
};
console.log(returnStringAtCharacter("apples\nmilk\nbread\nfish\n", 2));
//milk
console.log(
  returnStringAtCharacter("Beverly Hills\nSagaponack\nSanta Monica\n", 1)
);
//Beverly Hills

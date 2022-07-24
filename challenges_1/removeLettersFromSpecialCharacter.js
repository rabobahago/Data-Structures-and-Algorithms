// Remove Letters from Special Characters
// You are given a string that contains only characters and parenthesis as an argument. Return a string that has the parenthesis removed and contains only the characters.

// Requirements
// Must return a string
// Example #1
// solve("(a)(b)((c))(((d)))")
// > "abcd"
// Example #2
// solve("((ab)(cd)()()df)")
// > "abcddf"
const removeLettersFromSpecialCharacter = (string) => {
  //time O(n) and space O(n)
  const removeCharacter = [];
  for (let char of string.split("")) {
    if (char === "(" || char === ")") continue;
    else removeCharacter.push(char);
  }
  return removeCharacter.join("");
};
console.log(removeLettersFromSpecialCharacter("(a)(b)((c))(((d)))"));
//"abcd"
console.log(removeLettersFromSpecialCharacter("((ab)(cd)()()df)"));
//"abcddf"

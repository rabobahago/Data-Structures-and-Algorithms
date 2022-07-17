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

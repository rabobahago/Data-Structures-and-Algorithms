// time O(n^m *m) and  space O(m^2)
//brute force approach
const canConstruct = (target, wordBank) => {
  if (target === "") return true;
  for (let word of wordBank) {
    //remember the way we can only take the preffix of the wordBank
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
};
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);

// time O(n * m^2) and  space O(m^2)
//best approach
const canConstructs = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;
  for (let word of wordBank) {
    //remember the way we can only take the preffix of the wordBank
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      if (canConstructs(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};
console.log(canConstructs("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstructs("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstructs("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);

//brute force approach
//time complexity of O(n^m) and O(n)
const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];
  let result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      let suffixWays = allConstruct(suffix, wordBank);
      let targetWays = suffixWays.map((way) => [...way, word]);
      result.push(...targetWays);
    }
  }
  return result;
};
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);

//the best approach
//time complexity of O(n^m) and O(n)
const allConstructs = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];
  let result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      let suffixWays = allConstruct(suffix, wordBank, memo);
      let targetWays = suffixWays.map((way) => [...way, word]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};
console.log(allConstructs("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  allConstructs("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstructs("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);

console.log(
  allConstructs("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);

const countConstruct = (target, wordBank) => {
  if (target === "") return 1;
  let count = 0;
  for (let words of wordBank) {
    if (target.indexOf(words) === 0) {
      let numWasForRest = countConstruct(target.slice(words.length), wordBank);
      count += numWasForRest;
    }
  }
  return count;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);

const countConstructs = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let count = 0;
  for (let words of wordBank) {
    if (target.indexOf(words) === 0) {
      let numWasForRest = countConstruct(
        target.slice(words.length),
        wordBank,
        memo
      );
      count += numWasForRest;
    }
  }
  memo[target] = count;
  return count;
};

console.log(countConstructs("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstructs("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countConstructs("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);

console.log(
  countConstructs("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);

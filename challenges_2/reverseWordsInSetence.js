// Reverse Words in a Sentence
// You are given a string containing a single sentence as an argument. Return a string containing the words of the sentence in reverse order.

// Any special characters following a word should be considered part of that word.

// Requirements
// Must return a single string
// Must work with any combination of upper or lowercase letters and special characters
// Example #1
// solve("Hi, how are you?")
// > "you? are how Hi,"
// Example #2
// solve("To be, or not to be: that is the question")
// > "question the is that be: to not or be, To"
const reverseWordsInSetence = (setence) => {
  let result = [];
  const splitSetence = setence.split(" ");
  for (let i = splitSetence.length - 1; i >= 0; i--) {
    result.push(splitSetence[i]);
  }
  return result.join(" ");
};
console.log(reverseWordsInSetence("Hi, how are you?"));
console.log(reverseWordsInSetence("To be, or not to be: that"));

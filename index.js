function anagram(wordsOne, wordsTwo) {
  if (wordsOne.length !== wordsTwo.length) return false;
  let wordOneObj = {};
  let wordTwoObj = {};
  for (let i = 0; i < wordsOne.length; i++) {
    if (wordsOne[i] in wordOneObj) {
      wordOneObj[wordsOne[i]]++;
    } else {
      wordOneObj[wordsOne[i]] = 1;
    }
  }
  for (let i = 0; i < wordsTwo.length; i++) {
    if (wordsTwo[i] in wordTwoObj) {
      wordTwoObj[wordsTwo[i]]++;
    } else {
      wordTwoObj[wordsTwo[i]] = 1;
    }
  }
  for (let letter in wordOneObj) {
    if (
      !wordsTwo.hasOwnProperty(letter) &&
      wordTwoObj[letter] !== wordOneObj[letter]
    ) {
      return false;
    }
  }
  return true;
}
console.log(anagram("restful", "fluster"));

function reverseWordsInString(string) {
  let words = [];
  let startOfWord = 0;
  for (let id = 0; id < string.length; id++) {
    let character = string[id];
    if (character === " ") {
      words.push(string.slice(startOfWord, id));
      startOfWord = id;
    } else if (string[startOfWord] === " ") {
      words.push(" ");
      startOfWord = id;
    }
  }
  words.push(string.slice(startOfWord));
  reverseList(words);
  return words.join(" ");
}
function reverseList(words) {}
console.log(reverseWordsInString("hello world ooooo"));

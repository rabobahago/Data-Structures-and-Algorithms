let words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
function groupAnagrams(words) {
  let anagram = {};
  for (let word of words) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord in anagram) {
      anagram[sortedWord].push(word);
    } else {
      anagram[sortedWord] = [word];
    }
  }
  console.log(anagram);
  //return Object.values(anagram)
}
console.log(groupAnagrams(words));

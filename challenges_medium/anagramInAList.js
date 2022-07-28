// Anagrams in a List of Strings
// You are Given an array of strings as an argument.
// Return true if any string in the array is an anagram of another.
// An anagram is a word made by rearranging the letters of a different word, using all the letters exactly once.

// Arguments
// One array of strings

// Requirements
// Must return either true or false
// solve(["looped","poodle","dog","cart","number"])
// > true
// solve(["trout","cat","tutor","dog"])
// > true
// solve(["lamb","red","dog"])
// > false
// Must also work with strings that have multiple words separated by a space
// solve(["dirty room","many cats","dormitory"])
// > false
const anagramAList = (array) => {
  let sorted = array
    .map((item) => item.split("").sort().join(""))
    .filter((i) => i);
  const filted = sorted.filter((item, i, arr) => arr.indexOf(item) !== i); //this remove every elem once
  return !!filted.length;
};
console.log(anagramAList(["looped", "poodle", "dog", "cart", "number"]));
console.log(anagramAList(["trout", "cat", "tutor", "dog"]));
console.log(anagramAList(["lamb", "red", "dog"]));
console.log(anagramAList(["dirty room", "many cats", "dormitory"]));

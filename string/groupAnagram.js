function groupAnagrams(words) {
  //make an object to save to list
  let anagram = {};
  for (let word of words) {
    //split the string word to sort and join so it can be use to as key to
    //to group related anagram
    const sortedWord = word.split("").sort().join("");
    // check to see if the key is already in the object,
    // push the current word in value array.
    if (sortedWord in anagram) {
      anagram[sortedWord].push(word);
    } else {
      // else create a new value array
      anagram[sortedWord] = [word];
    }
  }
  // return the array of those object values
  return Object.values(anagram);
}

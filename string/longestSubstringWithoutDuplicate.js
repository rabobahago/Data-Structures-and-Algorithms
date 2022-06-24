function longestSubstringWithoutDuplication(string) {
  //last we see a character as a key and it current being stored in this object
  let lastSeen = {};
  //start last letter of unique character
  let longest = [0, 1];
  //startInd
  let startInd = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in lastSeen) {
      //note last seen is storing index of character as the occur not
      //how many times they occur
      startInd = Math.max(startInd, lastSeen[char] + 1);
    }
    //if the length of longest string stored is less longest current seen string
    if (longest[1] - longest[0] < i + 1 - startInd) {
      //replace the longest string with the current longest string
      //which start from starting index to current index plus one
      longest = [startInd, i + 1];
    }
    //final the last seen of the current character value to be equal to i
    lastSeen[char] = i;
  }
  return string.slice(longest[0], longest[1]);
}
// Time O(N)
//Space O(N, A) where N is the number character in the string and A is longest
//string stored

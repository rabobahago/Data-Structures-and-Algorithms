// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: fals
let wordBreak = (s, wordDict, memo = {}) => {
  //memo base case
  if (s in memo) return memo[s];
  //our base case
  if (s.length === 0) return true;
  for (let word of wordDict) {
    const indexFound = s.indexOf(word);
    if (indexFound === 0) {
      let suffix = s.slice(word.length);
      // recall the function with suffix replacing the s, so we can chock of s
      if (wordBreak(suffix, wordDict, memo) === true) {
        return true;
      }
    }
  }
  memo[s] = false;
  return false;
};
console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));

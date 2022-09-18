// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

//slide window approach
const lengthOfLongestSubstringWindow = (s) => {
  let max = 0,
    hash = new Set(),
    start = 0;
  for (let end = 0; end < s.length; end++) {
    while (hash.has(s[end])) {
      hash.delete(s[start]);
      start++;
    }
    hash.add(s[end]);
    max = Math.max(max, hash.size);
  }
  return max;
};
console.log(lengthOfLongestSubstringWindow("abcabcbb"));
console.log(lengthOfLongestSubstringWindow("bbbbb"));
console.log(lengthOfLongestSubstringWindow("pwwkew"));

//Naive Approach: Time complexity of O(n^2) and space O(1)
const lengthOfLongestSubstring = (s) => {
  let max = 0,
    longestStr = "",
    char,
    index;
  for (let i = 0; i < s.length; i++) {
    char = s.charAt(i);
    index = longestStr.indexOf(char);
    if (index !== -1) {
      longestStr = longestStr.substr(index + 1);
    }
    longestStr += char;
    max = Math.max(max, longestStr.length);
  }
  return max;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));

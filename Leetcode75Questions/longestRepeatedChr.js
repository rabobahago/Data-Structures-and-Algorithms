//424. Longest Repeating Character Replacement
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase
//English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
const longestRepeatedChr = (s, k) => {
  // Keep count of all the characters in the string
  const map = {};
  // left pointer, character with the current max frequency, return value
  let left = 0,
    max = 0,
    output = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    // Increment count of the current character
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
    // Update the character frequency
    max = Math.max(max, map[char]);
    // Shrink the window of characters we are looking at until we can have a window of all the
    //same characters + k charcters to change
    while (right - left + 1 - max > k) {
      map[s[left]]--;
      left++;
    }
    // Update the output if the current window is greater than our previous max window
    output = Math.max(output, right - left + 1);
  }
  return output;
};
console.log(longestRepeatedChr("ABAB", 2));

// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// Constraints:

// 1 <= words.length <= 500
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// k is in the range [1, The number of unique words[i]]
var topKFrequent = (words, k) => {
  let result = {};
  const words_sorted = words.sort();
  for (let i = 0; i < words_sorted.length; i++) {
    if (!result[words_sorted[i]]) {
      result[words_sorted[i]] = 1;
    } else {
      result[words_sorted[i]] += 1;
    }
  }
  const maxValue = Object.entries(result).sort((x, y) => y[1] - x[1]);
  let res = [];
  for (let j = 0; j < maxValue.length; j++) {
    res.push(maxValue[j][0]);
  }
  return res.slice(0, k);
};

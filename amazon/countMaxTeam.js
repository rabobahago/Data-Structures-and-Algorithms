// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:

// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

// Example 1:

// Input: rating = [2,5,3,4,1]
// Output: 3
// Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).
// Example 2:

// Input: rating = [2,1,3]
// Output: 0
// Explanation: We can't form any team given the conditions.
// Example 3:

// Input: rating = [1,2,3,4]
// Output: 4
const numTeams = (rating) => {
  // save total number of elements after i
  // that smaller than rating[i]
  let big = new Array(rating.length).fill(0);

  let n = rating.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (rating[j] > rating[i]) big[i]++;
    }
  }

  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (rating[j] > rating[i]) count += big[j];
      // because all elements are unique, so
      // we don't need to calculate the number of smaller elements
      // because if there are X bigger elements after rating[i]
      // then there are (n - i - 1 - X) smaller elements after rating[i]
      // or small = n - i - 1 - big
      else count += n - j - 1 - big[j];
    }
  }

  return count;
};

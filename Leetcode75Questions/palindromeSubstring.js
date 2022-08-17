const countSubstrings = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    //this check for the odd palindrome
    count += isPal(s, i, i);
    //this check for the even palindrome
    count += isPal(s, i, i + 1);
  }
  return count;
};
function isPal(s, left, right, count = 0) {
  while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
    count++;
    left--;
    right++;
  }
  return count;
}

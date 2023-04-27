const isPalindrome = (word) => {
  let stack = [];
  let rword = "";
  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  for (let i = 0; i < stack.length; i++) {
    rword += stack.pop();
  }
  if (word !== rword) return false;
  return true;
};
console.log(isPalindrome("civic"));
console.log(isPalindrome("refer"));
console.log(isPalindrome("madam"));

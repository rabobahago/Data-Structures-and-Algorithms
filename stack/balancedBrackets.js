// time O(n) and Space n(n)
function balancedBrackets(string) {
  //we have three ways in which our stack will be inbalance
  //1) when your last character is still there and the stack is empty
  //2) when your stack is not empty but character is finish
  //2) when character doesn't match the pop one
  let stack = [];
  //the opening brackets
  const openingBrackets = "([{";
  //the closing brackets
  const closingBrackets = ")]}";
  // matching Brackets
  const matchingBrackets = { ")": "(", "]": "[", "}": "{" };
  //loop through the string
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    //check if the character is in openingBrackets
    if (openingBrackets.includes(char)) {
      //push the opening bracket
      stack.push(char);
      //check if the character is in closingBrackets
    } else if (closingBrackets.includes(char)) {
      //then check again if the length of the stack is empty
      if (stack.length === 0) {
        //return false
        return false;
      }
      //then check again if the last character in the pop is equal to matchingBrackets
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        //if so, pop
        stack.pop();
      } else {
        //else return false
        return false;
      }
    }
  }
  //check if the length of the stack is empty after everything
  //if empty return true else return false
  return stack.length === 0;
}

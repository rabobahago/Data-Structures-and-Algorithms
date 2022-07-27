// Balanced Parenthesis
// You are given a string containing only parenthesis as an argument.
// Return true if all of the parenthesis have matching or closing parenthesis.

// Requirements
// Must return either true or false
// Example #1
// solve("()")
// > true
// Example #2
// solve("(((())")
// > false
const balancedParenthesis = (string) => {
  let open = [];
  let close = [];
  let char = string.split("");
  for (let i = 0; i < char.length; i++) {
    if (char[i] === "(") {
      open.push(char[i]);
    } else {
      close.push(char[i]);
    }
  }
  return open.length === close.length;
};
console.log(balancedParenthesis("(((())"));
console.log(balancedParenthesis("()"));

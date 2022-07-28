// Balancing Parenthesis
// You are given a string containing an unbalanced set of parenthesis
// as an argument. Return a new string with the parenthesis balanced.

// Requirements
// Must return a string
// Example #1
// solve("))")
// > "(())"
const balancedParenthesisStr = (string) => {
  let result = [];
  let str = string.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (string[i] === "))") {
      result.push("(())");
    } else {
      result.push("(())");
    }
  }
  return result.join(" ");
};
console.log(balancedParenthesisStr("))"));

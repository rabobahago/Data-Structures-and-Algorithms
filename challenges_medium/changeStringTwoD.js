// Change Strings in 2D Array Based on Conditions
// You are given a two dimensional array containing arrays of
// strings as an argument. Each inner array contains a set of two string elements.
// The first element represents either an 'add' or a 'delete' change directive.
// The second element is a string that you will apply the directive with. Start out
//  with an empty string, apply each set of change directives and return the resulting string.

// 'add' operations should add the given string to the end of the working string.

// 'delete' operations should remove all listed characters from the working string.

// Requirements
// Must return a string
// Example #1
// solve([['add', 'oralllng'], ['delete', 'lll'], ['add', 'e']])
// > 'orange'

// We start out with an empty string.
// The first directive is to add the string 'oralllng' to the empty string.
// Our string is now 'oralllng'
// The second directive is to delete the characters 'lll' from the string.
// Our string is now 'orang'
// The third directive is to add the letter 'e' which will be added to the end of our current string.
// Since there are no more inner arrays, we return our final string 'orange'
const changeStringTwoD = (array) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    const [first, second] = array[i];
    if (first === "add") {
      result += second;
    } else {
      result = second
        .split("")
        .reduce((acc, curr) => acc.replace(curr, ""), result);
    }
  }
  return result;
};
console.log(
  changeStringTwoD([
    ["add", "oralllng"],
    ["delete", "lll"],
    ["add", "e"],
  ])
);

let str = "heaaallo";
let remove = "aa";
const result = remove.split("").reduce((acc, val) => acc.replace(val, ""), str);
console.log(result);

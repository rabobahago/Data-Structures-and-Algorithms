// String to Array of Strings
// You are given a string containing some sentences terminated by . or ... with or without trailing spaces as an argument. Split the sentences and return an array of strings, where each element is a single sentence.

// The terminating characters and trailing spaces should be omitted from the strings in the returned array.

// Requirements
// Must return an array of strings
// Example #1
// solve("One. Two. Three... Four.")
// > ["One","Two","Three","Four"]
// Example #2
// solve("Two birds sat.Which one had more fun?")
// > ["Two birds sat", "Which one had more fun?"]
const stringToArrayOfString = (strArg) => {
  return strArg
    .split(".")
    .map((i) => i.trim())
    .filter((i) => i);
};
console.log(stringToArrayOfString("One. Two. Three... Four."));

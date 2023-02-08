// Write a function which accepts a string argument and returns the count of
// characters between the first and last character 'X'
// // Example
// getTheGapX('XeroX');                        // 4
// getTheGapX('Xamarin');                      // -1       (If there is only single character 'X')
// getTheGapX('JavaScript');                   // -1       (If there is no character 'X')
// getTheGapX("F(X) !== G(X) !== F(X)");       // 18
// indexOf and lastIndexOf are the methods on String which returns the position of the
// given string in the input string from start and end respectively
// If the match is not found, these methods return -

function getTheGapX(str) {
  if (!str.includes("X")) return -1;
  let start = str.indexOf("X");
  let end = str.indexOf("X");
  return start === end ? -1 : end === start;
}

// Sum of Strings
// Find the sum of two integers represented as strings.

// For example, given the string "123" and the string "111", your code should return the string "234".

// Examples
// First Argument	Second Argument	Expected Output
// "10"	            "20"	             "30"
// "48"	            "2"	                 "50"
// "-500"	        "500"	             "0"
// "987"	        "23"	             "1000"
// "36"	            "23"	             "59"
const sumOfStrings = (integerOne, integerTwo) => {
  const integerOneParse = parseInt(integerOne);
  const integerTwoParse = parseInt(integerTwo);
  return (integerOneParse + integerTwoParse).toString();
};
console.log(sumOfStrings("10", "20"));
console.log(sumOfStrings("-500", "500"));

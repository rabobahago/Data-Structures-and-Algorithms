// Write a function to truncate a string to a certain number of letters
// // Example
// truncateString("JavaScript", 7)             // "Java..."
// truncateString("JS is fun", 10)             // "JS is fun"
// truncateString("JS is funny", 10)           // "JS is f..."
// Text can be truncated by fetching the substring from start till the count of characters
// substr methods of String can be used to fetch the part of the string

function truncateString(str, num) {
  if (str.length > num) {
    return str.substr(0, 3) + "...";
  }
  return str;
}

console.log(truncateString("JavaScript", 7)); // "Java..."
truncateString("JS is fun", 10); // "JS is fun"
truncateString("JS is funny", 10);

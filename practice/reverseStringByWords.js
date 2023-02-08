// Write a program to reverse a string by words. Also show the reverse of each words in place
// The string can be reversed by words, by splitting the string with spaces and joining them back after reverse
// If the the letters in each word have to be reversed, the string reversal procedure has to be followed after
//breaking the string with spaces

//reverse by words
// function reverseByWords(str) {
//   return str.split(" ").reverse().join(" ");
// }
// console.log(reverseByWords("hello world"));

//reverse by world and letter
function reverseByWords(str) {
  return str
    .split(" ")
    .map((st) => st.split("").reverse().join(" "))
    .join(" ");
}
console.log(reverseByWords("hello world"));

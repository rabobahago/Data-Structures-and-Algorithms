// Store a set of words in an array and display the contents both forward and backward
let words = ["hello", "world", "what", "is", "happening", "here"];
//backward display
for (let i = words.length - 1; i >= 0; i--) {
  console.log(words[i]);
}

function concate(accumulator, word) {
  return `${accumulator}  ${word}`;
}
const reverseWord = words.reduceRight(concate);
console.log(reverseWord);

for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
}

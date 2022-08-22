// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.
const removeFirstVowel = (words) => {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    console.log(word);
  }
};
console.log(removeFirstVowel("volcano")); // 'vlcano'
// console.log(removeFirstVowel("celery")); // 'clery'
// console.log(removeFirstVowel("juice")); // 'jice'

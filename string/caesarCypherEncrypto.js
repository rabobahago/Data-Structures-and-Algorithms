function caesarCipherEncryptor(string, key) {
  let result = [];
  let newLetter = key % 26;
  for (const letter of string) {
    result.push(createNewLetter(letter, newLetter));
  }
  return result.join("");
}
function createNewLetter(stringLetter, keyNew) {
  let newLetterCode = stringLetter.charCodeAt() + keyNew;
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}

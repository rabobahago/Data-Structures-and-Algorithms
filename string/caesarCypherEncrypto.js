function caesarCipherEncryptor(string, key) {
  let results = [];
  //this done to reduce the character key so it will not be greater
  // than the requirement in the UTE-16
  let newLetter = key % 26;

  for (const letter of string) {
    results.push(createNewLetter(letter, newLetter));
  }
  return results.join("");
}
function createNewLetter(stringLetter, keyNew) {
  let newLetterCode = stringLetter.charCodeAt() + keyNew;
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}

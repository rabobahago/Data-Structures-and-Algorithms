function runLengthEncoding(string) {
  let encodedStringCharacter = [];
  let lengthRun = 1; //length start from 1 because the question said non empty string
  for (let i = 1; i < string.length; i++) {
    let currentChar = string[i];
    let previousChar = string[i - 1];
    // the length of charater for this problem shouldn't be greater than 9
    //and it has to start counting from zero
    // when the current character is not same as the previous it mean new character is
    //obtain
    if (currentChar !== previousChar || lengthRun === 9) {
      //push both lengthRun string version and the previus character
      encodedStringCharacter.push(lengthRun.toString());
      encodedStringCharacter.push(previousChar);
      lengthRun = 0;
    }
    // else increase the length
    lengthRun++;
  }
  //Remember after the loop has finish running, the last character param had to caught here
  // push the length of the final run of character
  encodedStringCharacter.push(lengthRun.toString());

  encodedStringCharacter.push(string[string.length - 1]);
  return encodedStringCharacter.join("");
}

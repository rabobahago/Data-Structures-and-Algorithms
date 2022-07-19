const characterInARow = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(characterInARow("terrific"));
console.log(characterInARow("cats"));
console.log(characterInARow("cats!!"));

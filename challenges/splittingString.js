const splittingString = (string, k) => {
  let result = [];
  while (string.length > 0) {
    result.push(string.slice(0, k));
    string = string.slice(k);
  }
  return result;
};
console.log(splittingString("aabbbcccd", 3));
console.log(splittingString("abcdefgh", 5));

function firstNonRepeatingCharacter(string) {
  const result = countChar(string);
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (result[char] === 1) return i;
  }
  return -1;
}
function countChar(str) {
  let result = {};
  for (let elem of str) {
    if (!result[elem]) {
      result[elem] = 1;
    } else {
      result[elem]++;
    }
  }
  return result;
}

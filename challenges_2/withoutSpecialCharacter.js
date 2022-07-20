const withoutSpecialCharacter = (string) => {
  let result = [];
  const matchReplace = string.replace(/[^a-zA-Z0-9]/g, " ");
  for (let char of matchReplace.split(" ")) {
    if (char === "") continue;
    else result.push(char);
  }
  return result;
};
console.log(withoutSpecialCharacter("Hi, how are you; I was quite curious!"));
console.log(withoutSpecialCharacter("Hello!!! The- sun- is- shining?"));

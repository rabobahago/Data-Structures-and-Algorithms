const duplicatingString = (string, k) => {
  let result = [];
  for (let i = 1; i <= k; i++) {
    result.push(string);
  }
  return result;
};
console.log(duplicatingString("abc", 5));
//['abc', 'abc', 'abc', 'abc', 'abc']
console.log(duplicatingString("Hi!", 3));
//['Hi!', 'Hi!', 'Hi!']

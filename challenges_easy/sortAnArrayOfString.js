const sortAnArrayOfString = (strArray) => {
  let symbols = strArray.map((el) => el.split("").slice(0, 1).join(""));
  let words = strArray.map((el) => el.split("").slice(1).join(""));
  let wordMap = {};
  let res = [];
  words.forEach((el, i) => {
    wordMap[el] = i;
  });
  for (let el of words.sort()) {
    res.push(symbols[wordMap[el]] + el);
  }
  return res;
};
console.log(sortAnArrayOfString(["@Winston", "@James", "@Albert", "@Sally"]));

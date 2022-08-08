const countBits = (n) => {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(helper(i));
  }
  return result;
};
const helper = (num) => {
  let binaryRep = num.toString(2);
  let matches = binaryRep.match(/1/g);
  return matches?.length ? matches.length : 0;
};

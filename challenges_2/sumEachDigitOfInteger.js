const sumEachDigitOfInteger = (string) => {
  let sum = 0;
  for (let char of string) {
    sum += parseInt(char);
  }
  return sum;
};
console.log(sumEachDigitOfInteger(6368206));

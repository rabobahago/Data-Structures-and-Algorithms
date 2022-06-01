function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqidx = 0;
  for (let value of array) {
    if (seqidx === sequence.length) return true;
    if (sequence[seqidx] === value) seqidx++;
  }
  return seqidx === sequence.length;
}

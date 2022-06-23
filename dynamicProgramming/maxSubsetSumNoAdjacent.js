//time O(n) and space(n)
function maxSubsetSumNoAdjacent(array) {
  //if the array is empty return 0
  if (!array.length) return 0;
  //if the array has single element return that element
  if (array.length === 1) return array[0];
  //copy the array
  let maxSum = array.slice();
  //since with dynamic programming we have handle the case of the first element above
  //let check the case of the first element of maxsum
  //return the max between 1'st and second element as the second element the first array
  maxSum[1] = Math.max(array[0], array[1]);
  //loop start from two, since the first and second element of maxSum had been handle
  //by the logic above
  for (let i = 2; i < array.length; i++) {
    //next value of i is the maximum between maxSum[1] and maxSum[0] + array[2]
    maxSum[i] = Math.max(maxSum[i - 1], maxSum[i - 2] + array[i]);
  }
  //return the element at index of maxSum length -1
  return maxSum[maxSum.length - 1];
}

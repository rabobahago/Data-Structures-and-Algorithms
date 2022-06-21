function longestPeak(array) {
  //cos peak will always have 0 length
  let longestPeaks = 0;
  //we must start one element ahead of zero index
  let i = 1;
  //while the length is still one less than the total length
  while (i < array.length - 1) {
    // this is how to get a peak
    let isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    //if not peak, increase i and continue
    if (!isPeak) {
      i++;
      continue;
    }
    //to check for the next left element that could peak after first left element
    let leftInd = i - 2;
    while (leftInd >= 0 && array[leftInd] < array[leftInd + 1]) {
      leftInd--;
    }
    //to check for the next right element that could peak after first left element
    let rightInd = i + 2;
    while (rightInd < array.length && array[rightInd] < array[rightInd - 1]) {
      rightInd++;
    }
    //this is how to calculate the peak
    let currentPeak = rightInd - leftInd - 1;
    //return the longest peak
    longestPeaks = Math.max(longestPeaks, currentPeak);
    // stip all the current peak element to the right
    i = rightInd;
  }
  return longestPeaks;
}
//time O(n) and space O(1)

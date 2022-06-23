//time O(nlogn) and space O(n)
function mergeOverlappingIntervals(intervals) {
  //sort the first element of inner array
  let sortedArray = intervals.sort((a, b) => a[0] - b[0]); //time O(logn)
  //set currentInterval to the first array;
  let currentInterval = sortedArray[0];
  //set save array
  let mergeArray = []; // space O(n)
  //push the currentInterval to the merge array
  mergeArray.push(currentInterval);
  //loop throuth the sorted array
  for (let nextInterval of sortedArray) {
    //time O(n)
    //ignored the first of the currentInterval and get the second element
    let [_, currentIntervalEnd] = currentInterval;
    //get both first element and second element of the inner array
    let [nextIntervalStart, nextIntervalEnd] = nextInterval;
    //check to see if the currentIntervalEnd is greater or equal to
    //the nextIntervalStart, then set the last element of currentInterval
    //to be equal to the max between the currentIntervalEnd and nextIntervalEnd
    if (currentIntervalEnd >= nextIntervalStart)
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    else {
      //else set the currentInterval to be equal to nextInterval
      currentInterval = nextInterval;
      // push currentInterval to the merge array
      mergeArray.push(currentInterval);
    }
  }
  // return the merge array
  return mergeArray;
}

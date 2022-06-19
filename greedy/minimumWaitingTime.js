function minimumWaitingTime(queries) {
  //sort from the minimum element
  queries.sort((a, b) => a - b);
  //min time start at zero
  let minTime = 0;
  //total accumulation
  let acc = 0;
  for (let i = 1; i < queries.length; i++) {
    //always start from zero waiting time
    minTime += queries[i - 1];
    //also acc the minimum time
    acc += minTime;
  }
  return acc;
}
//Time O(n) and space O(1)

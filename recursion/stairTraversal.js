//O(n * K) time | O(n) space
function staircaseTraversal(height, maxSteps) {
  //call callback numberOfWaysToTop with height of staircase and maxStep;
  return numberOfWaysToTop(height, maxSteps, { 0: 1, 1: 1 });
}
function numberOfWaysToTop(height, maxSteps, memoize) {
  //if height is in the object memoize it
  if (height in memoize) return memoize[height];
  //declare  numberOfways
  let numberOfWays = 0;
  //for loop
  //the reason why we need this min function here, is that there are
  //cases where maxStep will less than height since max height is
  //decrease by every step in the recursive call.
  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps, memoize);
  }
  memoize[height] = numberOfWays;
  return numberOfWays;
}

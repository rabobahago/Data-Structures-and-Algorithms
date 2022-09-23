//Given a staircase of n steps, count the number of distinct ways to climb to the top.
//you can either climb 1 step or 2 steps at a time
const climbingStaircase = (n) => {
  let numOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }
  return numOfWays[n - 1];
};
console.log(climbingStaircase(5));

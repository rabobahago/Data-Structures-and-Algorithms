// You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the ith job, you have to finish all the jobs j where 0 <= j < i).

// You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done on that day.

// You are given an integer array jobDifficulty and an integer d. The difficulty of the ith job is jobDifficulty[i].

// Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.

// Example 1:

// Input: jobDifficulty = [6,5,4,3,2,1], d = 2
// Output: 7
// Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
// Second day you can finish the last job, total difficulty = 1.
// The difficulty of the schedule = 6 + 1 = 7
// Example 2:

// Input: jobDifficulty = [9,9,9], d = 4
// Output: -1
// Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.
// Example 3:

// Input: jobDifficulty = [1,1,1], d = 3
// Output: 3
// Explanation: The schedule is one job per day. total difficulty will be 3.

const minDifficulty = (jobDifficulty, d) => {
  // don't have enought jobs to distribute
  if (jobDifficulty.length < d) {
    return -1;
  }

  // in dynamic programming top-down approach
  // we need to have memoisation to not repeat calculations
  let memo = new Array(d + 1)
    .fill(-1)
    .map(() => new Array(jobDifficulty.length + 1).fill(-1));

  const dp = function (D, N) {
    // if we calculated this before, just return
    if (-1 != memo[D][N]) {
      return memo[D][N];
    }

    // if we have only 1 day, we just need to take all jobs
    // and return the highest difficulty
    if (1 == D) {
      memo[D][N] = 0;
      for (let i = 0; i < N; i++) {
        if (memo[D][N] < jobDifficulty[i]) {
          memo[D][N] = jobDifficulty[i];
        }
      }
      return memo[D][N];
    }

    // otherwise, we use our recurrence relation to calculate
    memo[D][N] = 1000 * D;

    let max_job_per_day = N - D + 1;
    let max_difficulty = 0;

    // iteration for recurrence relation
    for (let X = 1; X <= max_job_per_day; X++) {
      // count max in the current range
      // len - X is the starting point for
      // the last day in D days
      if (jobDifficulty[N - X] > max_difficulty) {
        max_difficulty = jobDifficulty[N - X];
      }
      // recurrence relation
      // we took X jobs,
      // so we still have N - X jobs for D - 1 days
      let min_sum = max_difficulty + dp(D - 1, N - X);

      // pick the min only
      if (min_sum < memo[D][N]) {
        memo[D][N] = min_sum;
      }
    }

    return memo[D][N];
  };

  return dp(d, jobDifficulty.length);
};

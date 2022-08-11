// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

//algorithm run on time complexity of O(n) time
const longestConsecutive = (nums) => {
  let streak = 0;
  //put the in a set to remove duplicate
  let set = new Set(nums);
  for (let num of set) {
    //if set element that is one less than current
    //skip, because isn't the first to start our counting form this current streak
    if (set.has(num - 1)) continue;
    let currStreak = 1;
    //if the current num has it right hand element one greater than the current element
    //you increase the currentStreak and increase the num too in order the next element
    while (set.has(num + 1)) {
      currStreak++;
      num++;
    }
    //take the max after the loop
    let streak = Math.max(streak, currStreak);
  }
  return streak;
};

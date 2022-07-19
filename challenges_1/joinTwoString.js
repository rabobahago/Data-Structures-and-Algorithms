const joinTwoString = (strOne, strTwo) => {
  //time O(1) and space O(1)
  return `${strOne}${strTwo}`;
};
console.log(joinTwoString("ab", "ba"));
// abba
console.log(joinTwoString("race", "car"));
//"racecar"

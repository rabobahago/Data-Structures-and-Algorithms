const returnStringAtCharacter = (string, k) => {
  //   let splitArray = string.split("\n");
  //   const returnString = splitArray.slice(k - 1, k);
  //   return returnString.join("");
  //time O(n) and space O(1)
  return string
    .split("\n")
    .slice(k - 1, k)
    .join();
};
console.log(returnStringAtCharacter("apples\nmilk\nbread\nfish\n", 2));
//milk
console.log(
  returnStringAtCharacter("Beverly Hills\nSagaponack\nSanta Monica\n", 1)
);
//Beverly Hills

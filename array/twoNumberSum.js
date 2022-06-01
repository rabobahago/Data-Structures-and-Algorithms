function twoNumberSum(array, targetSum) {
  // Write your code here.
  let hashTable = {};
  for (let i = 0; i < array.length; i++) {
    let char = array[i];
    let targetDiff = targetSum - char;
    if (targetDiff in hashTable) {
      return [char, targetDiff];
    } else {
      hashTable[char] = true;
    }
  }
  return [];
}

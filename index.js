function anagram(wordsOne, wordsTwo) {
  if (wordsOne.length !== wordsTwo.length) return false;
  let wordOneObj = {};
  let wordTwoObj = {};
  for (let i = 0; i < wordsOne.length; i++) {
    if (wordsOne[i] in wordOneObj) {
      wordOneObj[wordsOne[i]]++;
    } else {
      wordOneObj[wordsOne[i]] = 1;
    }
  }
  for (let i = 0; i < wordsTwo.length; i++) {
    if (wordsTwo[i] in wordTwoObj) {
      wordTwoObj[wordsTwo[i]]++;
    } else {
      wordTwoObj[wordsTwo[i]] = 1;
    }
  }
  for (let letter in wordOneObj) {
    if (
      !wordsTwo.hasOwnProperty(letter) &&
      wordTwoObj[letter] !== wordOneObj[letter]
    ) {
      return false;
    }
  }
  return true;
}
console.log(anagram("restful", "fluster"));


function searchInSortedMatrix(matrix, target) {
  //first row
  let row = 0;
  //the last value in the first row
  let col = matrix[0].length - 1
  //while coordinate are still valid postion in the matrix
  while(row < matrix.length && col >= 0){
    if(matrix[row][col] > target){
      col--
    }else if(matrix[col][row] < target){
      row++
    }else{
      return [row, col]
    }
  }
  return [-1, -1]
}
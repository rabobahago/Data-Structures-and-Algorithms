/**
 * TODO:: Arrays
 */

/**
 * TODO:: Two Sum
 */
function twoSum(array, target) {
  let hashTable = {};
  for (let i = 0; i < array.length; i++) {
    let char = array[i];
    let targetDiff = target - char;
    if (targetDiff in hashTable) {
      return [char, targetDiff];
    } else {
      hashTable[char] = true;
    }
  }
  return [];
}

/**
 * TODO:: Three two
 */
function threeSum(array, targetSum) {
  array.sort(function (a, b) {
    return a - b;
  });
  let result = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let sum = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else if (sum > targetSum) {
        right--;
      }
    }
  }
  return result;
}

/**
 * TODO:: Smallest Difference
 */
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let index1 = 0;
  let index2 = 0;
  let current = Infinity;
  let smallest = Infinity;
  let arrayDiff = [];
  while (index1 < arrayOne.length && index2 < arrayTwo.length) {
    let elemOne = arrayOne[index1];
    let elemTwo = arrayTwo[index2];
    if (elemOne < elemTwo) {
      current = elemTwo - elemOne;
      index1++;
    } else if (elemTwo < elemOne) {
      current = elemOne - elemTwo;
      index2++;
    } else {
      //while the are equal
      return [elemOne, elemTwo];
    }
    if (current < smallest) {
      smallest = current;
      arrayDiff = [elemOne, elemTwo];
    }
  }
  return arrayDiff;
}

/**
 * TODO::Move element to End
 */

function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) {
      j--;
    }
    if (array[i] === toMove) {
      [array[i], array[j]] = [array[j], array[i]];
    }
    i++;
  }
  return array;
}

/**
 * TODO:: Monitonic Array
 */

function ismonitonic(array) {
  let isNondecreasing = true;
  let isNonIncreasing = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNondecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  return isNondecreasing || isNonIncreasing;
}

/**
 * TODO:: Spiral Transverse
 */

function spiralTraverse(array) {
  let result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}

/**
 * TODO:: LinkedList
 */
/**
 * TODO:: linkedList Reverse
 */
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  // Write your code here.
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

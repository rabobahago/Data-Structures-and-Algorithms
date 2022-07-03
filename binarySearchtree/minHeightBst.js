//O(n) time and O(n) space
function minHeightBst(array) {
  return constructMinHeightBst(array, 0, array.length - 1);
}
function constructMinHeightBst(array, startInd, endInd) {
  if (startInd > endInd) return null;
  let mid = Math.floor((startInd + endInd) / 2);
  let bst = new BST(array[mid]);
  bst.left = constructMinHeightBst(array, startInd, mid - 1);
  bst.right = constructMinHeightBst(array, mid + 1, endInd);
  return bst;
}

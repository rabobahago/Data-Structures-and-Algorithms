function binaryTreeDiameter(tree) {
  //call the tree diameter
  return getTreeInfo(tree).diameter;
}
function getTreeInfo(tree) {
  if (tree === null) {
    return new TreeInfo(0, 0);
  }
  //recursive call the getTreeInfo with left node
  const leftTreeInfo = getTreeInfo(tree.left);
  //recursive call the getTreeInfo with right node
  const rightTreeInfo = getTreeInfo(tree.right);
  //total height of the tree itself
  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  //get the max diameter between the left and right node
  const maxDiameterSoFar = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );
  //current diameter
  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  //current height
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
  return new TreeInfo(currentDiameter, currentHeight);
}
class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

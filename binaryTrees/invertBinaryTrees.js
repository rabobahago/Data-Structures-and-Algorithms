function invertBinaryTree(tree) {
  //bread first search
  const queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    //if the current is null stip it. that stip node that doesn't have value
    if (current === null) continue;
    //swap the left and right
    swapLeftAndRight(current);
    //push the left and right

    queue.push(current.left);
    queue.push(current.right);
  }
}
function swapLeftAndRight(current) {
  let left = current.left;
  current.left = current.right;
  current.right = left;
}

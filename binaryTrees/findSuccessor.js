function findSuccessor(tree, node) {
  const inOrderTraversalOrder = getInOrderTraversalOrder(tree);
  for (let ind = 0; ind < inOrderTraversalOrder.length; ind++) {
    const currentNode = inOrderTraversalOrder[ind];
    //if current is not equal to node stip
    if (currentNode !== node) continue;
    //if we are at the end of index return null
    if (ind === inOrderTraversalOrder.length - 1) return null;
    return inOrderTraversalOrder[ind + 1];
  }
}
function getInOrderTraversalOrder(node, order = []) {
  //if node is null return the order at that point
  if (node === null) return order;
  //recursive call the func with node left and order
  getInOrderTraversalOrder(node.left, order);
  //visit the node
  order.push(node);
  //recursive call the func with node right and order
  getInOrderTraversalOrder(node.right, order);
  //return order
  return order;
}

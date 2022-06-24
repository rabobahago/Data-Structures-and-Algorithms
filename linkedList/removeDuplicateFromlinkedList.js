function removeDuplicatesFromLinkedList(linkedList) {
  //let the current  node equal to head node;
  let currentNode = linkedList;
  //while current node is not null
  while (currentNode !== null) {
    //set distinct node to be current node next
    let distinctNode = currentNode.next;
    //while distinct node is not null and distinct value is equal to current node
    //value keep looping
    while (distinctNode !== null && distinctNode.value === currentNode.value) {
      //keep moving
      distinctNode = distinctNode.next;
    }
    //at this point current node value and distinct value are different
    //set the current node next to equal distinct node
    currentNode.next = distinctNode;
    //move the current node to be equal distinct node
    currentNode = distinctNode;
  }
  return linkedList;
}

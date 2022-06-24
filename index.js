function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null) {
    let distinctNode = currentNode.next;
    while (distinctNode !== null && distinctNode.value === currentNode.value) {
      distinctNode = distinctNode.next;
    }
    currentNode.next = distinctNode;
    currentNode = distinctNode;
  }
  return linkedList;
}

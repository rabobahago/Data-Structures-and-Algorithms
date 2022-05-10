/**
 * todo: Reverse Linked List
 * todo:: Questions
 * todo:: write a function that take in the head of a Singly Linked list, reverses the list in place
 * todo:: (i.e., doesn't create a brand new list), and returns its new head.
 * todo:: Each LinkedList node has an integer value as well as a next node pointing to the next node
 * todo:: in the list or to None / null if it's the tail of the list.
 * todo:: you can assume that the input linked list will always have at least one node
 * todo:: in other words, the head will never be None/null.
 * todo:: Sample input
 * todo:: head=0=>1=>2=>3=>4=>4=>5=>5
 * todo:: Sample output
 * todo:: 5=>4=>3=>2=>1=>0
 */
// This is an input class. Do not edit.
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

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.reverseLinkedList = reverseLinkedList;

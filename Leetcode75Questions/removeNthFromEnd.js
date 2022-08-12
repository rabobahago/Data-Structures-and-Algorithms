// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let left = dummy;
  let right = head;
  while (right && n > 0) {
    right = right.next;
    n--;
  }
  while (right) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return dummy.next;
};

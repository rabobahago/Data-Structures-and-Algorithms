// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.
// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

const reorderList = (head) => {
  if (!head || !head.next) return head;
  let prev = head;
  let tail = head.next;
  while (tail) {
    tail.prev = prev;
    prev = tail;
    tail = tail.next;
  }
  let cur = head;
  while (cur !== prev && cur.prev !== prev) {
    const next = cur.next;
    cur.next = prev;
    prev.next = next;
    prev = prev.prev;
    cur = next;
  }
  cur.next = null;
  return head;
};

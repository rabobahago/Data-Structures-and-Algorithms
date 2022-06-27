//time O(n^2) and space O(n)
function sortStack(stack) {
  //if the stack is empty, it is sorted so return it
  if (stack.length === 0) return stack;
  //if not pop off the top element
  let top = stack.pop();
  //repeat the process again until the stack is empty
  sortStack(stack);
  //pass in the stack and elements remove from the stack
  insertStackBySorting(stack, top);
  //return the stack
  return stack;
}
function insertStackBySorting(stack, value) {
  //if the stack is empty or the last element is less or equal to
  //value then push value into the stack return return
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }
  //else pop the last element
  let top = stack.pop();
  //sort again
  insertStackBySorting(stack, value);
  //push the top
  stack.push(top);
}

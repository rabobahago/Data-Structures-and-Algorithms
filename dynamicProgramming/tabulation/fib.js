//time complexity of O(n) and space O(n)
function tab(n) {
  let array = new Array(n + 1).fill(0);
  for (let i = 2; i < array.length; i++) {
    array[1] = 1;
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n];
}
console.log(tab(6));
console.log(tab(50));

//second method time complexity of O(n) and space O(n)
function fib(n) {
  //remember all the elements are set to 0
  //and since first element of fibonucci series is 0, we can
  // set second which is 1;
  let table = new Array(n + 1).fill(0);
  table[1] = 1;
  //note how i < n and not table.length
  for (let i = 0; i < n; i++) {
    //add the current element at i index to the next two elements
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  //return the last element
  return table[n];
}
console.log(fib(60));

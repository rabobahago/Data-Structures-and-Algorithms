// A closure is a scope which captures local variables of a
// function for access even after the execution has moved out of
// the block in which it is defined. This allows the values in the
// closure to be accessed by returned functions.

const addTo = (x) => (y) => x + y;
const addToFive = addTo(5);
addToFive(3); // => 8
// In this case the x is retained in addToFive's closure with the value 5.
// addToFive can then be called with the y to get back the sum.

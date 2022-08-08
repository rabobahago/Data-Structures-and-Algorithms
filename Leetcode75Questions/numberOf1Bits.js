// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

// Example 1:

// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
// Example 2:

// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
// Example 3:

// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
const numberOf1Bits = (n) => {
  //remember what so ever base you pass to toString() it will convert the input that base
  let binaryRepresentation = n.toString(2);
  //matches to the array of whatsoever, in this case is '1'
  let matches = binaryRepresentation.match(/1/g);
  // note the syntax of ?. which check to see if matches is null or undefined the access of length wil not fail
  return matches?.length > 0 ? matches.length : 0;
};
console.log(numberOf1Bits(00000000000000000000000000000000));
console.log(numberOf1Bits(00000000000000000000000000001011));

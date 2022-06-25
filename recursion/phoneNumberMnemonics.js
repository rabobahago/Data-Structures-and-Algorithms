// time O(4^n * n) and space O(4^n *n);
let map = {
  0: [0],
  1: [1],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
function addMnemonics(index, pn, current, set) {
  //if index is equal to pn length i.e string length
  // join the current array and push them to the set.
  if (index === pn.length) return set.push(current.join(""));
  //get the number character with pn[index] and list of each
  //character with map[pn[index]]
  const number = map[pn[index]];
  for (let i = 0; i < number.length; i++) {
    let letter = number[i];
    //recall the function with the following parameters
    addMnemonics(index + 1, pn, [...current, letter], set);
  }
}

function phoneNumberMnemonics(phoneNumber) {
  //set an array of save the generated Mnemonics
  let set = [];
  //convert phoneNumber to a string
  let pn = phoneNumber.toString();
  //call addMnemonic with index 0, string of phone numbers, array to save the current
  //generated Mnemonic, then the set itself
  addMnemonics(0, pn, [], set);
  //return the set itself
  return set;
}

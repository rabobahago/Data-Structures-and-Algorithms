function multiStringSearch(bigString, smallStrings) {
  //call ModifiedSuffixTrie class with bibstring
  const modifiedSuffixTrie = new ModifiedSuffixTrie(bigString);
  //map smallStrings while passing the each string in it to contain method in ModifiedSuffixTrie
  //class, which make multiStringSearch to return array of true or false
  return smallStrings.map((string) => modifiedSuffixTrie.contains(string));
}
class ModifiedSuffixTrie {
  constructor(string) {
    this.root = {};
    this.populateModifiedSuffixTrieFrom(string);
  }
  populateModifiedSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubStringStartingAt(i, string);
    }
  }
  insertSubStringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      let letter = string[j];
      //if letter is not in the chain, add object
      if (!(letter in node)) {
        node[letter] = {};
      }
      //else keep add letter to the chain
      node = node[letter];
    }
  }
  contains(string) {
    //set node to be root
    let node = this.root;
    for (let letter of string) {
      //if there is no such string return false
      if (!(letter in node)) return false;
      //mark the end of the string
      node = node[letter];
    }
    // return true after the loop
    return true;
  }
}

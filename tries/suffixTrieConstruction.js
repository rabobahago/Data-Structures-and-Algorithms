class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubStringStartingAt(i, string);
    }
  }
  insertSubStringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      let letter = string[j];
      if (!(letter in node)) {
        //if it is not in the node add object
        node[letter] = {};
      }
      //continue to the next node along the chain
      node = node[letter];
    }
    //marke the end with '*'
    node[this.endSymbol] = true;
  }
  contains(string) {
    let node = this.root;
    for (let letter of string) {
      //if letter is not in string return false
      if (!(letter in node)) return false;
      // else continue along the chain
      node = node[letter];
    }
    //this should mark the end of our search
    return this.endSymbol in node;
  }
}

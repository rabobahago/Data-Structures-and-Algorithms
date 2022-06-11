function reverseWordsInString(string) {
  // hash to store
  let words = [];
  // starting index
  let startOfWord = 0;
  for (let id = 0; id < string.length; id++) {
    let character = string[id];
    //if character is white space
    if (character === " ") {
      words.push(string.slice(startOfWord, id));
      //slice and change the starting point
      startOfWord = id;
      //if the there is white space at the begin
    } else if (string[startOfWord] === " ") {
      // push empty white space
      words.push(" ");
      //slice and change the starting point
      startOfWord = id;
    }
  }
  //slice the last character and push
  words.push(string.slice(startOfWord));
  //call a reverse function to reverse the character
  reverseList(words);
  return words.join("");
}
function reverseList(list) {
  let start = 0;
  //end index
  let end = list.length - 1;
  while (start < end) {
    //swap the last and start character, continue if start index is still less than end index
    let temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
  return list;
}

function updateDisc(word, disc) {
  let charFrequency = {};
  for (let char of word) {
    if (char in charFrequency) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }
  for (let char in charFrequency) {
    let count = charFrequency[char];
    if (char in disc) {
      disc[char] = Math.max(count, disc[char]);
    } else {
      disc[char] = count;
    }
  }
}

function extractChars(disc) {
  //array of charaters to be return
  let chars = [];
  // loop through the object
  for (let key in disc) {
    //while there are values
    while (disc[key]) {
      chars.push(key);
      //decrease value after push
      disc[key]--;
    }
  }
  return chars;
}
function minimumCharactersForWords(words) {
  //set and empty object
  let disc = {};

  for (let word of words) updateDisc(word, disc);
  return extractChars(disc);
}

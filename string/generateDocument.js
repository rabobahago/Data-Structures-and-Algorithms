// first solution
function generateDocument(characters, document) {
  // Write your code here.
  const characterCounts = {};
  for (let character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0;

    characterCounts[character]++;
  }
  for (let character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0)
      return false;

    characterCounts[character]--;
  }
  return true;
}

// second solution

function generateDocument(characters, document) {
  // W
  const charResults = generateCountChar(characters);
  const docResults = generateCountChar(document);
  for (let char in docResults) {
    if (
      !charResults.hasOwnProperty(char) &&
      docResults[char] !== charResults[char]
    ) {
      return false;
    }
  }
  return true;
}
function generateCountChar(str) {
  let results = {};
  for (let elem of str) {
    if (!results[elem]) {
      results[elem] = 1;
    } else {
      results[elem]++;
    }
  }
  return results;
}

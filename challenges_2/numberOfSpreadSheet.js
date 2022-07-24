// Find the Column Number of a Spreadsheet
// You are given a string representing a column in a spreadsheet program. A typical spreadsheet program names the columns A-Z, then AA-AZ, then BA-BZ and so on. Return an integer representing the string argument's column number.

// Requirements
// Must return an integer
// Example #1
// solve("M")
// > 13
// Example #2
// solve("AA")
// > 27
// Example #3
// solve("EW")
// > 153

const numberOfSpreadSheet = (column) => {
  const columnLabels = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let arr = [];
  for (let i = 0; i < column.length; i++) {
    arr.push(columnLabels.indexOf(column[i]) + 1);
  }
  const result = arr.reduce((acc, elem, index) => {
    if (index === arr.length - 1) return acc + elem;
    return acc * (columnLabels.length * elem);
  }, 1);
  return result;
};
console.log(numberOfSpreadSheet("M"));
console.log(numberOfSpreadSheet("EW"));

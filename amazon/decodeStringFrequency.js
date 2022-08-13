var charFreq = function (frequencyString) {
  var stringArray = frequencyString.split("");
  var frequencies = {};
  for (var k in stringArray) {
    var nowLetter = stringArray[k];
    if (stringArray.hasOwnProperty(k)) {
      // One way to initialize the value -- not the only way.
      if (!frequencies[nowLetter]) {
        frequencies[nowLetter] = 0;
      }

      frequencies[nowLetter] += 1;
    }
  }
  return frequencies;
};

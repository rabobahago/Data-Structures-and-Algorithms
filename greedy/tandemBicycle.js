function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  //sort array in order to get access to element at constant time
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);
  //if fastest is false swap all the element of red shirt speed
  //so we can get combine of highest elements in both two array
  //e.g [2, 4, 6] and [5, 6, 8] to get [6, 8] in our first element choses
  if (!fastest) reverseArray(redShirtSpeeds);
  let fastestSpeed = 0;
  // get combine of highest and lowest elements in both two array
  //e.g [2, 4, 6] and [5, 6, 8] to get [2, 5] in our first element choses
  //in order the max
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    let redValue = redShirtSpeeds[i]; //get first element dynamically
    let blueValue = blueShirtSpeeds[blueShirtSpeeds.length - i - 1]; //get last element dynamically
    let value = Math.max(redValue, blueValue); // pick the max
    fastestSpeed += value; //sum the max
  }
  return fastestSpeed;
}
function reverseArray(array) {
  //all elements
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
}
//time O(n) and space O(1)

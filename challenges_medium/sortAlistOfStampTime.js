// Sort a List of Timestamps
// You are given an array of strings containing timestamps in 24-hour time as an argument. Return the array of timestamps sorted in ascending order.

// Requirements
// Must return an array of strings
// Must be sorted in ascending order
// Example #1
// solve(["23:55","00:12","06:01","15:59"])
// > ["00:12","06:01","15:59","23:55"]
const sortAlistOfStampTime = (array) => {
  let result = [];
  let minutes, hours;
  for (var i = 0; i < array.length; i++) {
    const [a, b] = array[i].split(":");
    let total = Number(a) * 60 + Number(b);
    result.push(total);
  }
  return result
    .sort((a, b) => a - b)
    .map((num) => {
      hours = Math.floor(num / 60) % 24;
      minutes = num % 60;
      console.log(hours, minutes);
      return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(
        2,
        0
      )}`;
    });
};
console.log(sortAlistOfStampTime(["23:55", "00:12", "06:01", "15:59"]));

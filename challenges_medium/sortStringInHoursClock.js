// Sort Strings in 24 Hour Clock Format
// You are given an array of strings representing the current time
// using the 24-hour clock format 'HH:MM' as an argument. Return the
// array after sorting the "times" from earliest to latest.

// Requirements
// Must return an array of strings
// Example #1
// solve(['20:00', '04:04', '03:15', '12:01', '23:59'])
// > ['03:15', '04:04', '12:01', '20:00', '23:59']
const sortStringInHoursClock = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const [first, second] = array[i].split(":");
    let hours = Number(first);
    let minutes = Number(second);
    result.push(hours * 60 + minutes);
  }
  let final = [];
  let sorted = result.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    let hours = Math.floor(sorted[i] / 60) % 24;
    let minutes = sorted[i] % 60;
    let time = `${String(hours).padStart(2, 0)}:${String(minutes).padStart(
      2,
      0
    )}`;
    final.push(time);
  }
  return final;
};

console.log(
  sortStringInHoursClock(["20:00", "04:04", "03:15", "12:01", "23:59"])
);

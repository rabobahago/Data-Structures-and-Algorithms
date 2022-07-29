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
  for (let i = 0; i < array.length; i++) {
    const [first, second] = array[i].split(":");
    let hours = Number(first);
    let minutes = Number(second);
  }
  console.log(mapData);
};
console.log(
  sortStringInHoursClock(["20:00", "04:04", "03:15", "12:01", "23:59"])
);

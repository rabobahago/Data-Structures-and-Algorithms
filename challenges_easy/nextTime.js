// Find the Next Time Formed by String
// You are given a string that represents time in 24-hour clock format as an argument. Find the next time that is formed by using only the numbers in the string

// Requirements
// Must return a string
// Example #1
// solve("15:13")
// > "15:31"
const nextTime = (time) => {
  let dig = time.match(/\w/gi);
  let digInt = dig.map((val) => {
    return parseInt(val);
  });

  if (digInt[3] > digInt[2] && digInt[3] < 6) {
    return `${digInt[0]}${digInt[1]}:${digInt[3]}${digInt[2]}`;
  }

  let small = digInt[2] < digInt[3] ? digInt[2] : digINt[3];
  let large = digInt[2] < digInt[3] ? digInt[3] : digINt[2];

  if (digInt[1] > large) {
    if (digInt[1] < 3) {
      return `${digInt[1]}${digInt[0]}:${small}${large}`;
    }
  } else if (small < digInt[1] && digInt[1] < large) {
    return `${digInt[0]}${large}:${small}${digInt[1]}`;
  } else if (digInt[1] < small) {
    return `${digInt[0]}${small}:${digInt[1]}${large}`;
  }
};
console.log(nextTime("15:13"));

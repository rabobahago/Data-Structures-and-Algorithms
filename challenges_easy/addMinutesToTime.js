// Add Minutes to String Representing Time
// You are given a string that represents time in 24-clock format and an integer M representing the number of minutes. Return a string representing the time with the number of minutes M added to it.

// Requirements
// Must return a string
// Example #1
// solve("06:59", 300)
// > "11:59"

const addMinutesToTime = (string, M) => {
  let [hours, minutes] = string.split(":").map((a) => Number(a));
  let totalMinutes = hours * 60 + (M + minutes);
  let realHours = Math.floor(totalMinutes / 60) % 24;
  let realMinutes = totalMinutes % 60;
  return `${String(realHours).padStart(2, 0)} : ${String(realMinutes).padStart(
    0,
    2
  )}`;
};
console.log(addMinutesToTime("06:59", 300));
console.log(addMinutesToTime("23: 23", 500));

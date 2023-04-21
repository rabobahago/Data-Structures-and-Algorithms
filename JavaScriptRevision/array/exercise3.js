// Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
// data using a two-dimensional array. Create functions to display the monthly aver‐
// age, a specific week’s average, and all the weeks’ averages.

function WeeklyTemps() {
  this.storages = [];
  this.add = add;
  this.averageWeekly = averageWeekly;
  //this.averageMonthly = averageMonthly;
}
function add(name, month, week) {
  this.storages.push([{ name, month, week }]);
}
function averageWeekly() {
  let total = 0;
  for (let row = 0; row < this.storages.length; row++) {
    for (let col = 0; col < this.storages[row].length; col++) {
      total += this.storages[row][col].week;
    }
  }

  return total / this.storages.length;
}
let weekTemp = new WeeklyTemps();
weekTemp.add("Rabo", 90, 23);
weekTemp.add("Garba", 67, 40);
console.log(weekTemp.averageWeekly());

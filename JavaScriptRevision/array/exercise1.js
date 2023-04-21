// Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.
function GradesStorage() {
  this.grades = [];
  this.add = add;
  this.average = average;
}

function add(name, grade) {
  this.grades.push({ name, grade });
}
function average() {
  let total = 0;
  for (let i = 0; i < this.grades.length; i++) {
    total += this.grades[i].grade;
  }
  return total / this.grades.length;
}
const gradeStorage = new GradesStorage();
gradeStorage.add("Rabo", 60);
gradeStorage.add("Martins", 90);
gradeStorage.add("Musty", 90);
console.log(gradeStorage.grades);
console.log(gradeStorage.average());

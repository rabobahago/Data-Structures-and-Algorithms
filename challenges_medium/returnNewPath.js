// Return New Directory Path of a Change Command
// You are given a string representing a system directory
// path and a string representing a directory change command
// as arguments. Return the new directory path after the change command has been "executed."

// '../' indicates going up one directory, '../../' would mean to go up two directories etc.

// Requirements
// Must return a string
// Example #1
// solve('/home/pictures/hawaii/july', '../../florida/may')
// > '/home/pictures/florida/may'

// Example #2
// solve('/Library/Logs/Microsoft', '../../../var/log')
// > '/var/log'
const returnNewPath = (path, change) => {
  const result = path.split("/");
  change.split("/").forEach((e) => {
    if (e === "..") {
      result.pop();
    } else {
      result.push(e);
    }
  });
  return result.join("/");
};

console.log(returnNewPath("/Library/Logs/Microsoft", "../../../var/log"));
console.log(returnNewPath("/home/pictures/hawaii/july", "../../florida/may"));

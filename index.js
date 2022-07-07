// function reverseStrig(str) {
//   let reverse = "";
//   for (let char of str) {
//     reverse = char + reverse;
//   }
//   return reverse;
// }
// console.log(reverseStrig("hello"));
// function reverseStrigReduce(str) {
//   return str.split("").reduce((rev, char) => rev + char, "");
// }
// console.log(reverseStrig("hello"));
// function reverseStrigReduceRight(str) {
//   return str.split("").reduceRight((rev, char) => rev + char);
// }
// console.log(reverseStrigReduceRight("hello"));
// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseStr("hello"));
// function reverseSt(str) {
//   let total = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     total += str[i];
//   }
//   return total;
// }
// console.log(reverseSt("hello"));
// function isPalindrome(str) {
//   return str.split("").reverse().join("") === str;
// }
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("dod"));
// function palindrome(str) {
//   let mid = Math.floor(str.length / 2);
//   for (let i = 0; i < str.length; i++) {
//     if (mid === i) break;
//     if (str[i] !== str[str.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palindrome("hello"));
// //console.log(palindrome("dod"));
// function maxChar(str) {
//   let result = {};
//   let max = 0;
//   let characters = "";
//   for (let char of str) {
//     if (!result[char]) result[char] = 1;
//     else result[char] = result[char] + 1;
//   }
//   for (let char in result) {
//     if (result[char] > max) {
//       max = result[char];
//       characters = char;
//     }
//   }
//   return characters;
// }
// console.log(maxChar("hello"));
// function chunk(array, size) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let last = result[result.length - 1];
//     if (!last || last.length === size) {
//       result.push([array[i]]);
//     } else {
//       last.push(array[i]);
//     }
//   }
//   return result;
// }
// console.log(chunk([3, 5, 6, 8, 89, 23, 4, 1], 3));
function taskAssignment(k, tasks) {
  let result = [];
  const formattedTasks = tasks.map((task, index) => ({ task, index }));
  formattedTasks.sort((a, b) => a.task - b.task);
  let start = 0;
  let end = formattedTasks.length - 1;
  while (start <= end) {
    result.push([formattedTasks[start].index, formattedTasks[end].index]);
    start++;
    end--;
  }
  return result;
}
console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]));

// let arr = [2, 3, 4, 5, 6];
// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     console.log(arr[i]);
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr[j]);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(arr));

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    //console.log(array[i])
    for (let j = i + 1; j < lowest; j++) {
      console.log(array[i], array[j]);
    }
  }
  return array;
}
console.log(selectionSort([34, 22, 10, 19, 17]));

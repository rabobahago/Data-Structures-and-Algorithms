function taskAssignment(k, tasks) {
  let result = [];
  const formattedTasks = tasks.map((task, index) => ({ task, index }));
  //this return [{task:2, index: 0}, {task:90, index:1}, {task: 6, index: 2}]
  formattedTasks.sort((a, b) => a.task - b.task);
  //this sort the object in the array by it value
  //this return [{task:2, index: 0}, {task:6, index:1}, {task: 90, index: 2}]
  let start = 0;
  let end = formattedTasks.length - 1;
  //start is less than or equal to end
  while (start <= end) {
    //we access the index property of the array object dynamically
    result.push([formattedTasks[start].index, formattedTasks[end].index]);
    //increase the start index and decrease the end index
    start++;
    end--;
  }
  return result;
}

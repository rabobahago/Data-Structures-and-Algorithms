function connectedSum(n, edges) {
  let sets = [];

  //create n sets
  for (var i = 1; i <= n; i++) {
    let set = new Set();
    set.add(i.toString());
    sets.push(set);
  }

  //iterate the edges
  for (var i = 0; i < edges.length; i++) {
    //var for member set found
    let memberSet = null;
    //split my string into the two edges in each entry
    let splitEdges = edges[i].split(" ");

    //iterate over sets 0 - n, find the two matching sets and combine them
    //then splice the non-combined one
    for (var j = 0; j < sets.length; j++) {
      let set = sets[j];

      if (set.has(splitEdges[0])) {
        if (memberSet == null) {
          memberSet = set;
        } else {
          set.forEach((item) => memberSet.add(item));
          sets.splice(j, 1);
          break; //no need to continue this iteration - both edges matched
        }
      }

      if (set.has(splitEdges[1])) {
        if (memberSet == null) {
          memberSet = set;
        } else {
          set.forEach((item) => memberSet.add(item));
          sets.splice(j, 1);
          break; //no need to continue this iteration - both edges matched
        }
      }
    }
  }

  return computeEfficiency(sets);
}

function computeEfficiency(sets) {
  let result = 0;

  sets.map((set) => {
    result = result + Math.ceil(Math.sqrt(set.size));
  });

  return result;
}

let n = 16;

let input = ["6 11", "9 5", "11 9", "15 9", "13 15", "12 14", "15 16", "1 16"];

console.log(connectedSum(n, input));

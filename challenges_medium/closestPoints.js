// Closest Points in 2D Array
// You are given a two dimensional array containing arrays of integer pairs, representing points. Return a two dimensional array containing the two points that are closest to each other.

// Requirements
// Must return a two dimensional array containing two arrays of points
// Must also be able to handle negative points
// Example #1
// solve([[0,0], [1, 1], [100, 200], [450, 0]])
// > [[0,0], [1,1]]

// Example #2
// solve([[-2, -1], [0,0], [35, 36], [35, 0]])
// > [[-2, -1], [0,0]]

const closestPoint = (points) => {
  let result = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let distance = calShortDistace(points[i], points[j]);
      result.push({
        points: [points[i], points[j]],
        dist: distance,
      });
    }
  }
  const min = Math.min(...result.map((point) => point.dist));
  console.log(min);
  return result.find((point) => point.dist === min).points;
};
const calShortDistace = (pointsA, pointsB) => {
  return (
    Math.sqrt((pointsB[0] - pointsA[0]) ** 2) + (pointsB[1] - pointsA[1]) ** 2
  );
};
console.log(
  closestPoint([
    [0, 0],
    [1, 1],
    [100, 200],
    [450, 0],
  ])
);
console.log(
  closestPoint([
    [-2, -1],
    [0, 0],
    [35, 36],
    [35, 0],
  ])
);

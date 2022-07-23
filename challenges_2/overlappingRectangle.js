// Find Overlapping Rectangles
// You are a given two rectangles, defined by two coordinate pairs of integers representing the rectangle's bottom left and top right points as arguments. Return true if the '"rectangles" overlap, false if not.

// Requirements
// Must return either true or false
// Example #1
// solve([[0,0],[5,5]], [[4, -1], [5, 2]])
// > true
// Example #2
// solve([[0,0],[5,5]], [[4,-1],[5,-3]])
// > false

const overlappingRectangles = (rectOne, rectTwo) => {
  const [b1, b2, w1, w2] = rectOne.flat();
  const [c1, c2, y1, y2] = rectTwo.flat();
  //overlappingRectangles
  if (b1 > y1 || b2 > y2) return false;
  if (c1 > w1 || c2 > w2) return false;
  return true;
};
console.log(
  overlappingRectangles(
    [
      [0, 0],
      [5, 5],
    ],
    [
      [4, -1],
      [5, 2],
    ]
  )
);
console.log(
  overlappingRectangles(
    [
      [0, 0],
      [5, 5],
    ],
    [
      [4, -1],
      [5, -3],
    ]
  )
);

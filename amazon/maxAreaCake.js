//1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
// You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:

// horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
// verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.
// Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7.
// Example 1:
// Input: h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]
// Output: 4
// Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green piece of cake has the maximum area.
// Example 2:

// Input: h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]
// Output: 6
// Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green and yellow pieces of cake have the maximum area.
// Example 3:

// Input: h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3]
// Output: 9
//Solution:
// Calculate max area, we need to have max height and max width

// How to find max height and max width

// A height of a cut is the distance between two horizontal cut. 0 and h is also consider as a cut
// A width of a cut is the distance between two vertical cut. 0 and w is also consider as a cut

// Note: horizontalCuts and verticalCuts need to be sorted as there is no guarantee that it is sorted.

// Once we found the max height and max width, max area is just max width * max height

// Note: Handle BigInt in Javascript can be quite tricky
// BigInt(maxHeight) * BigInt(maxWidth) % 1000000007n
const maxArea = (h, w, horizontalCuts, verticalCuts) => {
  horizontalCuts.sort((h1, h2) => h1 - h2);
  verticalCuts.sort((v1, v2) => v1 - v2);

  let maxHeight = Math.max(
    horizontalCuts[0],
    h - horizontalCuts[horizontalCuts.length - 1]
  );
  let maxWidth = Math.max(
    verticalCuts[0],
    w - verticalCuts[verticalCuts.length - 1]
  );

  for (let i = 1; i < horizontalCuts.length; i++) {
    maxHeight = Math.max(maxHeight, horizontalCuts[i] - horizontalCuts[i - 1]);
  }

  for (let j = 1; j < verticalCuts.length; j++) {
    maxWidth = Math.max(maxWidth, verticalCuts[j] - verticalCuts[j - 1]);
  }

  return (BigInt(maxHeight) * BigInt(maxWidth)) % 1000000007n;
};
console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));

//1041. Robot Bounded In Circle
// On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

// The north direction is the positive direction of the y-axis.
// The south direction is the negative direction of the y-axis.
// The east direction is the positive direction of the x-axis.
// The west direction is the negative direction of the x-axis.
// The robot can receive one of three instructions:

// "G": go straight 1 unit.
// "L": turn 90 degrees to the left (i.e., anti-clockwise direction).
// "R": turn 90 degrees to the right (i.e., clockwise direction).
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

// Example 1:

// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot is initially at (0, 0) facing the north direction.
// "G": move one step. Position: (0, 1). Direction: North.
// "G": move one step. Position: (0, 2). Direction: North.
// "L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: West.
// "L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: South.
// "G": move one step. Position: (0, 1). Direction: South.
// "G": move one step. Position: (0, 0). Direction: South.
// Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (0, 2) --> (0, 1) --> (0, 0).
// Based on that, we return true.
// Example 2:

// Input: instructions = "GG"
// Output: false
// Explanation: The robot is initially at (0, 0) facing the north direction.
// "G": move one step. Position: (0, 1). Direction: North.
// "G": move one step. Position: (0, 2). Direction: North.
// Repeating the instructions, keeps advancing in the north direction and does not go into cycles.
// Based on that, we return false.
// Example 3:

// Input: instructions = "GL"
// Output: true
// Explanation: The robot is initially at (0, 0) facing the north direction.
// "G": move one step. Position: (0, 1). Direction: North.
// "L": turn 90 degrees anti-clockwise. Position: (0, 1). Direction: West.
// "G": move one step. Position: (-1, 1). Direction: West.
// "L": turn 90 degrees anti-clockwise. Position: (-1, 1). Direction: South.
// "G": move one step. Position: (-1, 0). Direction: South.
// "L": turn 90 degrees anti-clockwise. Position: (-1, 0). Direction: East.
// "G": move one step. Position: (0, 0). Direction: East.
// "L": turn 90 degrees anti-clockwise. Position: (0, 0). Direction: North.
// Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (-1, 1) --> (-1, 0) --> (0, 0).
// Based on that, we return true.
// Where dir object means coordinates of the vector: north means vector {0, 1}, west {1, 0}, south {0, -1} and east {-1, 0}.

// Then we just go through each letter of input and check wether it's 'G', 'R' or 'L'.
// In case it's 'G', we change our coordinates depending on dir object:

// coord.x += dir.x;
// coord.y += dir.y;
// In case it's 'L' or 'R' I decided to check every possible case (there are four of them
//     depending on vector's direction): x = 0 and y = 1, x = 0 and y = -1, x = 1 and y = 0, x = -1 and y = 0.
// There might be a better mathematical approach, if you know how to get rid of unnessary if else conditions, lmk in the comments.

// After going through the whole string we just need to check wether the coordinate is {0, 0}
// again or the vector doesn't point to north (in this case we will end up coming back eventually),
// and in this case return true, otherwise return false.

const isRobotBounded = (instructions) => {
  const dir = {
    x: 0,
    y: 1,
  };

  const coord = {
    x: 0,
    y: 0,
  };

  for (let i = 0; i < instructions.length; i++) {
    switch (instructions[i]) {
      case "G":
        coord.x += dir.x;
        coord.y += dir.y;
        break;
      case "L":
        if (dir.x === 0 && dir.y === 1) {
          dir.x = -1;
          dir.y = 0;
        } else if (dir.x === 0 && dir.y === -1) {
          dir.x = 1;
          dir.y = 0;
        } else if (dir.y === 0 && dir.x === -1) {
          dir.y = -1;
          dir.x = 0;
        } else if (dir.y === 0 && dir.x === 1) {
          dir.y = 1;
          dir.x = 0;
        }
        break;
      case "R":
        if (dir.x === 0 && dir.y === 1) {
          dir.x = 1;
          dir.y = 0;
        } else if (dir.x === 0 && dir.y === -1) {
          dir.x = -1;
          dir.y = 0;
        } else if (dir.x === -1 && dir.y === 0) {
          dir.y = 1;
          dir.x = 0;
        } else if (dir.x === 1 && dir.y === 0) {
          dir.y = -1;
          dir.x = 0;
        }
        break;
    }
  }

  if (coord.x === 0 && coord.y === 0) return true;
  if (dir.y !== 1) return true;
  return false;
};
console.log(isRobotBounded("GGLLGG"));
console.log(isRobotBounded("GG"));
console.log(isRobotBounded("GL"));

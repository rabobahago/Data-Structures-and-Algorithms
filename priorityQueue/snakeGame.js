//Snake
//queue for snake body
//draw grid with snake body
//take in a direction manipulate a queue
class Snake {
  constructor() {
    this.snakeBody = [
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
    ];
  }
  move(direction) {
    let delta = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
    };
    const [currRow, currCol] = this.snakeBody[this.snakeBody.length - 1];
    const [changeRow, changeCol] = delta[direction];
    this.snakeBody.push([currRow + changeRow, currCol + changeCol]);
    this.snakeBody.shift();
  }
  draw() {
    let grid = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let i = 0; i < 10; i++) {
        row.push(" ");
      }
      grid.push(row);
    }
    this.snakeBody.forEach((pos) => {
      const [r, c] = pos;
      grid[r][c] = "O";
    });
    console.clear();
    grid.forEach((r) => console.log(r.join("|")));
  }
  play() {
    let stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.on("data", (keypress) => {
      if (keypress === "w") this.move("up");
      if (keypress === "a") this.move("left");
      if (keypress === "s") this.move("down");
      if (keypress === "d") this.move("right");
      if (keypress === "\u0003") process.exit();
      this.draw();
    });
  }
}
let snake = new Snake();
console.log(snake.play());
// console.log("-------------");
// snake.move("up");
// console.log(snake.draw());
// console.log("-------------");
// snake.move("right");
// console.log(snake.draw());

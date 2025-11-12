const board = document.getElementById("board");
const ctx = board.getContext("2d");
const square = 20;

let score = 0;
let direction = "RIGHT";
let game;
let snake = [
  { x: 100, y: 100 },
  { x: 80, y: 100 },
  { x: 60, y: 100 }
];

//  Food setup
let food = {
  x: Math.floor(Math.random() * (board.width / square)) * square,
  y: Math.floor(Math.random() * (board.height / square)) * square
};

//  Draw one snake segment
function draw_rect(part) {
  ctx.fillStyle = "#00ffcc";
  ctx.strokeStyle = "#001020";
  ctx.fillRect(part.x, part.y, square, square);
  ctx.strokeRect(part.x, part.y, square, square);
}

//  Draw food
function draw_food() {
  ctx.fillStyle = "#ff0055";
  ctx.fillRect(food.x, food.y, square, square);
}

//  Draw snake
function draw_snake() {
  snake.forEach(draw_rect);
}

//  Change direction
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  else if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});

//  Move snake
function move_snake() {
  let head = { ...snake[0] };

  if (direction === "UP") head.y -= square;
  else if (direction === "DOWN") head.y += square;
  else if (direction === "LEFT") head.x -= square;
  else if (direction === "RIGHT") head.x += square;

  snake.unshift(head);

  //  Eat food
  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
    food.x = Math.floor(Math.random() * (board.width / square)) * square;
    food.y = Math.floor(Math.random() * (board.height / square)) * square;
  } else {
    snake.pop();
  }
}

//  Collision
function check_collision() {
  const head = snake[0];
  // Wall
  if (
    head.x < 0 || head.x >= board.width ||
    head.y < 0 || head.y >= board.height
  ) {
    endGame();
  }

  // Self
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      endGame();
    }
  }
}

//  End Game
function endGame() {
  clearInterval(game);
  document.getElementById("finalScore").textContent = `Final Score: ${score}`;
  document.getElementById("gameOver").style.display = "flex";
}

//  Restart Game
document.getElementById("restartBtn").addEventListener("click", () => {
  snake = [
    { x: 100, y: 100 },
    { x: 80, y: 100 },
    { x: 60, y: 100 }
  ];
  direction = "RIGHT";
  score = 0;
  document.getElementById("score").textContent = `Score: 0`;
  document.getElementById("gameOver").style.display = "none";
  game = setInterval(game_loop, 150);
});

//  Game Loop
function game_loop() {
  ctx.clearRect(0, 0, board.width, board.height);
  draw_food();
  move_snake();
  draw_snake();
  check_collision();
}

//  Start Game
game = setInterval(game_loop, 150);

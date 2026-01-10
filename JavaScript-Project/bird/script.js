const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Bird sprite (you can replace with any image)
const birdImg = new Image();
birdImg.src = "https://i.ibb.co/6Jm1SHP/flappy-bird.png";

// Bird properties
window.bird = {
  x: 120,
  y: 200,
  width: 35,
  height: 25,
  gravity: 0.2,
  velocity: 0
};

window.pipes = [];
window.score = 0;
window.gameOver = false;

// Game constants
const PIPE_GAP = 150;
const PIPE_SPACING = 300;
const PIPE_WIDTH = 70;

// Update bird movement
window.updateBird = function() {
  this.bird.velocity += this.bird.gravity;
  this.bird.y += this.bird.velocity;

  if (this.bird.y + this.bird.height > canvas.height || this.bird.y < 0) {
    this.gameOver = true;
  }
};

// Generate and move pipes
window.updatePipes = function() {
  this.pipes.forEach(pipe => {
    pipe.x -= 3;

    if (!pipe.passed && pipe.x + pipe.width < this.bird.x) {
      pipe.passed = true;
      this.score++;
      document.getElementById("score").textContent = this.score;
    }

    // Collision detection
    if (
      this.bird.x < pipe.x + pipe.width &&
      this.bird.x + this.bird.width > pipe.x &&
      (this.bird.y < pipe.topHeight ||
       this.bird.y + this.bird.height > pipe.bottomY)
    ) {
      this.gameOver = true;
    }
  });

  // Add new pipes
  if (
    this.pipes.length === 0 ||
    this.pipes[this.pipes.length - 1].x < canvas.width - PIPE_SPACING
  ) {
    const topHeight = Math.random() * (canvas.height - PIPE_GAP - 100) + 50;
    this.pipes.push({
      x: canvas.width,
      width: PIPE_WIDTH,
      topHeight,
      bottomY: topHeight + PIPE_GAP,
      passed: false
    });
  }

  // Remove old pipes
  if (this.pipes[0] && this.pipes[0].x + this.pipes[0].width < 0) {
    this.pipes.shift();
  }
};

// Bird jump
window.jump = function() {
  this.bird.velocity = -4.5;
};

// Reset game
window.resetGame = function() {
  this.bird.y = 200;
  this.bird.velocity = 0;
  this.pipes = [];
  this.score = 0;
  document.getElementById("score").textContent = 0;
  this.gameOver = false;
};

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (this.gameOver) {
      this.resetGame();
    } else {
      this.jump();
    }
  }
});

// Main game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (this.gameOver) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "42px Poppins";
    ctx.fillText("💀 Game Over", canvas.width / 2 - 130, canvas.height / 2 - 20);
    ctx.font = "22px Poppins";
    ctx.fillText("Press Space to Restart", canvas.width / 2 - 130, canvas.height / 2 + 20);
    return;
  }

  this.updateBird();
  this.updatePipes();

  // Draw pipes
  ctx.fillStyle = "#2ecc71";
  this.pipes.forEach(pipe => {
    ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight);
    ctx.fillRect(pipe.x, pipe.bottomY, pipe.width, canvas.height - pipe.bottomY);
  });

  // Draw bird image
  ctx.drawImage(birdImg, this.bird.x, this.bird.y, this.bird.width, this.bird.height);

  // Draw score on canvas
  ctx.fillStyle = "black";
  ctx.font = "24px Poppins";
  ctx.fillText(`Score: ${this.score}`, 20, 30);

  requestAnimationFrame(gameLoop.bind(this));
}

gameLoop.call(window);

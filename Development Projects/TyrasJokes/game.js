// Game variables
let x, y;

function setup() {
  const gameContainer = document.getElementById('game-container');
  const canvas = createCanvas(400, 400);
  canvas.parent(gameContainer);

  x = width / 2;
  y = height / 2;
}

function draw() {
  background(200);
  circle(x, y, 50);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    y -= 10;
  } else if (keyCode === DOWN_ARROW) {
    y += 10;
  } else if (keyCode === LEFT_ARROW) {
    x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    x += 10;
  }
}

// Run the game
new p5();

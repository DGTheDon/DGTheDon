let player;
let platforms = [];
let enemies = [];
let coins = [];
let fireballs = [];
let cameraX = 0;
let levelWidth = 20000;
let score = 0;
let lives = 3;
let gameIsOver = false;
let gameIsWon = false;

function setup() {
  createCanvas(2000, 600);

  // Create player
  player = new Player(100, height - 80);

  // Create platforms
  platforms.push(new Platform(0, height - 20, levelWidth, 20));
  platforms.push(new Platform(100, height - 150, 200, 20));
  platforms.push(new Platform(400, height - 250, 150, 20));
  platforms.push(new Platform(650, height - 350, 120, 20));
  platforms.push(new Platform(950, height - 450, 200, 20));

  // Create enemies
  enemies.push(new Enemy(300, height - 150));
  enemies.push(new Enemy(700, height - 350));

  // Create coins
  coins.push(new Coin(200, height - 180));
  coins.push(new Coin(500, height - 280));
  coins.push(new Coin(800, height - 380));
  coins.push(new Coin(1050, height - 480));
}

function draw() {
  // Create an animated gradient background
  setGradientBackground();

  // Set camera position to follow the player
  cameraX = player.position.x - width / 2;

  // Update and display player
  if (!gameIsOver && !gameIsWon) {
    player.update();
  }
  player.display();

  // Update and display platforms
  for (let platform of platforms) {
    platform.display();
  }

  // Update and display enemies
  for (let enemy of enemies) {
    enemy.update();
    enemy.display();

    // Check for collision with the player
    if (player.hits(enemy)) {
      player.reset();
      lives--;
      if (lives === 0) {
        gameIsOver = true;
      }
      break;
    }
  }

  // Update and display coins
  for (let coin of coins) {
    if (!coin.isCollected && player.collects(coin)) {
      coin.isCollected = true;
      score++;
      if (score === coins.length) {
        gameIsWon = true;
      }
    }
    coin.display();
  }

  // Update and display fireballs
  for (let fireball of fireballs) {
    fireball.update();
    fireball.display();

    // Check for collision with enemies
    for (let enemy of enemies) {
      if (fireball.hits(enemy)) {
        enemy.reset();
        fireball.remove();
        break;
      }
    }
  }

  // Remove fireballs that are out of screen
  fireballs = fireballs.filter((fireball) => !fireball.isOffScreen());

  // Check for collision with platforms
  player.checkCollision(platforms);

  // Display score and lives
  fill(255);
  textSize(24);
  text(`Score: ${score}`, 20, 40);
  text(`Lives: ${lives}`, width - 120, 40);

  // Move the camera horizontally to follow the player
  translate(-cameraX, 0);

  // Game over screen
  if (gameIsOver) {
    displayGameOver();
  }

  // Game won screen
  if (gameIsWon) {
    displayGameWon();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW || keyCode === 32) {
    player.jump();
  }
  if (keyCode === RIGHT_ARROW) {
    player.move(1);
  }
  if (keyCode === LEFT_ARROW) {
    player.move(-1);
  }
  if (keyCode === 70) { // 'F' key for fireball attack
    player.attack();
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    player.stop();
  }
}

function keyTyped() {
  if (key === "r" || key === "R") {
    if (gameIsOver || gameIsWon) {
      resetGame();
    }
  }
}

function setGradientBackground() {
  let c1 = color(0, 0, 255);
  let c2 = color(135, 206, 250);
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function displayGameOver() {
  fill(255, 0, 0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  textSize(20);
  text("Press R to retry", width / 2, height / 2 + 50);
}

function displayGameWon() {
  fill(255, 255, 0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Congratulations!", width / 2, height / 2);
  textSize(20);
  text("You win!", width / 2, height / 2 + 50);
  text("Press R to play again", width / 2, height / 2 + 100);
}

function resetGame() {
  player.reset();
  score = 0;
  lives = 3;
  gameIsOver = false;
  gameIsWon = false;
}

class Player {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.size = createVector(40, 60);
    this.jumpForce = 14;
    this.moveSpeed = 7;
    this.isOnGround = false;
  }

  update() {
    this.applyGravity();
    this.moveHorizontally();
    this.updatePosition();
  }

  applyGravity() {
    this.acceleration.y = 0.7;
  }

  moveHorizontally() {
    this.velocity.x += this.acceleration.x;
    this.velocity.x = constrain(this.velocity.x, -this.moveSpeed, this.moveSpeed);
    this.position.x += this.velocity.x;
    this.acceleration.x = 0;
  }

  jump() {
    if (this.isOnGround) {
      this.velocity.y -= this.jumpForce;
      this.isOnGround = false;
    }
  }

  checkCollision(platforms) {
    for (let platform of platforms) {
      if (this.position.y + this.size.y >= platform.position.y) {
        if (
          this.position.x + this.size.x >= platform.position.x &&
          this.position.x <= platform.position.x + platform.size.x
        ) {
          this.position.y = platform.position.y - this.size.y;
          this.velocity.y = 0;
          this.isOnGround = true;
          return;
        }
      }
    }
    this.isOnGround = false;
  }

  updatePosition() {
    this.position.y += this.velocity.y;
    this.velocity.y += this.acceleration.y;
    this.position.y = constrain(this.position.y, 0, height - this.size.y);
  }

  move(direction) {
    this.acceleration.x = direction * 5.5;
  }

  stop() {
    this.acceleration.x = 0;
    this.velocity.x = 0;
  }

  reset() {
    this.position.set(100, height - 80);
    this.velocity.set(0, 0);
  }

  attack() {
    if (fireballs.length < 3) {
      fireballs.push(new Fireball(this.position.x, this.position.y));
    }
  }

  display() {
    fill(255, 0, 0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  hits(enemy) {
    let distance = dist(this.position.x, this.position.y, enemy.position.x, enemy.position.y);
    return distance < this.size.x / 2 + enemy.size / 2;
  }

  collects(coin) {
    let distance = dist(this.position.x, this.position.y, coin.position.x, coin.position.y);
    return distance < this.size.x / 2 + coin.size / 2;
  }
}

class Platform {
  constructor(x, y, width, height) {
    this.position = createVector(x, y);
    this.size = createVector(width, height);
  }

  display() {
    fill(0, 255, 0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}

class Enemy {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(-2, 0);
    this.size = 30;
  }

  update() {
    this.position.add(this.velocity);
    if (this.position.x < 0 || this.position.x + this.size > levelWidth) {
      this.velocity.x *= -1;
    }
  }

  display() {
    fill(0, 0, 255);
    rect(this.position.x, this.position.y, this.size, this.size);
  }

  reset() {
    this.position.set(1000, height - 150);
    this.velocity.set(-2, 0);
  }
}

class Coin {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.size = 20;
    this.isCollected = false;
  }

  display() {
    if (!this.isCollected) {
      fill(255, 255, 0);
      ellipse(this.position.x, this.position.y, this.size, this.size);
    }
  }
}

class Fireball {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(8, 0);
    this.size = 20;
  }

  update() {
    this.position.add(this.velocity);
  }

  display() {
    fill(255, 165, 0);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  hits(enemy) {
    let distance = dist(this.position.x, this.position.y, enemy.position.x, enemy.position.y);
    return distance < this.size / 2 + enemy.size / 2;
  }

  isOffScreen() {
    return this.position.x > cameraX + width || this.position.x < cameraX;
  }

  remove() {
    fireballs = fireballs.filter((fireball) => fireball !== this);
  }
}

// initialize and start the p5.js sketch
new p5();

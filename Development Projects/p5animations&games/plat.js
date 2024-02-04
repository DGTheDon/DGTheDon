let player;
let platforms = [];

function setup() {
  createCanvas(800, 600);
  player = new Player();
  platforms.push(new Platform(0, height - 20, width, 20));
  platforms.push(new Platform(300, height - 100, 200, 20));
}

function draw() {
  background(220);
  for (let platform of platforms) {
    platform.show();
  }
  player.show();
  player.move(platforms);
}

function keyPressed() {
  if (key == ' ') {
    player.jump();
  }
}

class Player {
  constructor() {
    this.x = 50;
    this.y = height - 70;
    this.dy = 0;
    this.gravity = 0.5;
    this.lift = -10;
  }

  show() {
    fill(255);
    rect(this.x, this.y, 20, 50);
  }

  move(platforms) {
    this.y += this.dy;
    this.dy += this.gravity;
    this.y = constrain(this.y, 0, height - 70);

    for (let platform of platforms) {
      if (platform.touches(this)) {
        this.dy = 0;
        this.y = platform.y - 50;
      }
    }
  }

  jump() {
    for (let platform of platforms) {
      if (platform.touches(this)) {
        this.dy = this.lift;
      }
    }
  }
}

class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    fill(100);
    rect(this.x, this.y, this.w, this.h);
  }

  touches(player) {
    return (player.x + 20 > this.x && player.x < this.x + this.w && player.y + 50 > this.y && player.y < this.y + this.h);
  }
}

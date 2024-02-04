// Load p5.js library
document.write('<script src="js/p5.min.js"></script>');

// Initialize p5.js animations
function initAnimations() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(255, 255, 255, 10);
  animateLaughingEmojis();
}

function animateLaughingEmojis() {
  if (frameCount % 20 === 0) {
    laughingEmojis.push(new LaughingEmoji(random(width), random(height)));
  }

  for (let i = laughingEmojis.length - 1; i >= 0; i--) {
    laughingEmojis[i].display();
    laughingEmojis[i].update();

    if (laughingEmojis[i].isOffScreen()) {
      laughingEmojis.splice(i, 1);
    }
  }
}

class LaughingEmoji {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = emojiSize;
    this.speed = 1;
  }

  display() {
    textSize(this.size);
    text("😂", this.x, this.y);
  }

  update() {
    this.y -= this.speed;
  }

  isOffScreen() {
    return this.y < -this.size;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
class Dancer {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.angle = 0;
    this.scale = 1;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    scale(this.scale);
    imageMode(CENTER);
    image(this.img, 0, 0);
    pop();
  }

  update() {
    this.angle += 0.01;
    this.scale = 1 + 0.1 * sin(frameCount * 0.05);
  }
}

function createDancer(x, y, imgPath) {
  return new Promise((resolve) => {
    loadImage(imgPath, (img) => {
      resolve(new Dancer(x, y, img));
    });
  });
}

export { createDancer };
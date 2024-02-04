class DancerPart {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
  }

  display() {
    image(this.img, this.x, this.y);
  }

  update(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

function createDancerParts() {
  const head = new DancerPart(0, -50, loadImage('src/assets/images/woman_dancer/head.png'));
  const body = new DancerPart(0, 0, loadImage('src/assets/images/woman_dancer/body.png'));
  const leftArm = new DancerPart(-25, 0, loadImage('src/assets/images/woman_dancer/left_arm.png'));
  const rightArm = new DancerPart(25, 0, loadImage('src/assets/images/woman_dancer/right_arm.png'));
  const leftLeg = new DancerPart(-15, 50, loadImage('src/assets/images/woman_dancer/left_leg.png'));
  const rightLeg = new DancerPart(15, 50, loadImage('src/assets/images/woman_dancer/right_leg.png'));

  return {
    head,
    body,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg
  };
}
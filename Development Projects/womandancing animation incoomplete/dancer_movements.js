function updateDancerMovements(dancer) {
  dancer.angle += dancer.rotationSpeed;
  dancer.x = dancer.centerX + dancer.radius * cos(dancer.angle);
  dancer.y = dancer.centerY + dancer.radius * sin(dancer.angle);

  dancer.rotationSpeed += dancer.rotationAcceleration;
  dancer.radius += dancer.radiusChange;

  if (dancer.radius > dancer.maxRadius || dancer.radius < dancer.minRadius) {
    dancer.radiusChange *= -1;
  }

  if (dancer.rotationSpeed > dancer.maxRotationSpeed || dancer.rotationSpeed < dancer.minRotationSpeed) {
    dancer.rotationAcceleration *= -1;
  }
}

function applyDancerMovements(dancer) {
  push();
  translate(dancer.x, dancer.y);
  rotate(dancer.angle);
  imageMode(CENTER);
  image(dancer.image, 0, 0, dancer.width, dancer.height);
  pop();
}
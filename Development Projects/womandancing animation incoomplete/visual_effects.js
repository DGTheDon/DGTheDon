function applyVisualEffects() {
  background(0, 50);
  blendMode(ADD);
  let numParticles = 100;
  let particleSize = 5;

  for (let i = 0; i < numParticles; i++) {
    let x = random(width);
    let y = random(height);
    let col = color(random(255), random(255), random(255), 50);
    fill(col);
    noStroke();
    ellipse(x, y, particleSize, particleSize);
  }
}
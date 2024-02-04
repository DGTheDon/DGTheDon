// p5.js animations for Taliyah's Turtles Website

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0, 100, 150);
  drawSwimmingTurtles();
}

function drawSwimmingTurtles() {
  let numTurtles = 10;
  let turtleSize = 50;

  for (let i = 0; i < numTurtles; i++) {
    let x = (i * windowWidth / numTurtles) + sin(frameCount * 0.05 + i) * 50;
    let y = windowHeight / 2 + cos(frameCount * 0.05 + i) * 50;

    push();
    translate(x, y);
    rotate(frameCount * 0.01);
    fill(0, 255, 0);
    ellipse(0, 0, turtleSize, turtleSize / 2);
    fill(0, 200, 0);
    ellipse(0, 0, turtleSize / 2, turtleSize);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
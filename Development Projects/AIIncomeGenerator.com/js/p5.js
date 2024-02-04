let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
}

function draw() {
  background(255, 255, 255, 50);
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(mouseX, mouseY, random(50), random(50));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
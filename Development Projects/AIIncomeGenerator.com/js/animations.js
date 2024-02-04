// Initialize p5.js animations
function initP5Animations() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("home-section");
  background(0);
}

// p5.js setup function
function setup() {
  initP5Animations();
}

// p5.js draw function
function draw() {
  // Add your p5.js animations here
}

// p5.js windowResized function
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Initialize p5.js library
document.addEventListener("DOMContentLoaded", function () {
  new p5();
});
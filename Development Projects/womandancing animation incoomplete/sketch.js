let dancer;
let bgImage;
let dancerImage;
let music;

function preload() {
  bgImage = loadImage("src/assets/images/background.png");
  dancerImage = loadImage("src/assets/images/woman_dancer.png");
  music = loadSound("src/assets/sounds/music.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  dancer = createDancer(dancerImage);
  music.loop();
}

function draw() {
  background(bgImage);
  updateDancer(dancer);
  displayDancer(dancer);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
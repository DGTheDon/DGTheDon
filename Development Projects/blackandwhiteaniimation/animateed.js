let t;

function setup() {
  createCanvas(600, 600);
  noStroke();
  t = 0;
}

function draw() {
  background(10, 10); 
  fill(255, 5);
  for (let i = 0; i < 100; i++) {
    let x = width * noise(t + i*0.005);
    let y = height * noise(t + i*0.005 + 100);
    ellipse(x, y, 50, 50);
  }
  t += 0.01;
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(255);
    for (let i = 0; i < 10; i++) {
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(random(0, width), random(0, height), 50, 50);
    }
}

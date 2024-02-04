let circleX, circleY;
let numCircles = 50;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    circleX = new Array(numCircles);
    circleY = new Array(numCircles);
}

function draw() {
    background(0);
    noStroke();
    fill(255, 25);

    for (let i = 0; i < numCircles; i++) {
        circleX[i] = constrain(mouseX + i * 5 * cos(radians(frameCount + i * 10)), 0, window.innerWidth);
        circleY[i] = constrain(mouseY + i * 5 * sin(radians(frameCount + i * 10)), 0, window.innerHeight);
        ellipse(circleX[i], circleY[i], 25, 25);
    }
}

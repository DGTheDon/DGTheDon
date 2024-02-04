// JavaScript for interactivity goes here
document.querySelector('.navbar a[href="#email-list"]').addEventListener('click', function() {
    document.querySelector('.email-list').style.display = 'block';
});

// p5.js sketch
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-animation');
}

function draw() {
    background(220);
    ellipse(mouseX, mouseY, 50, 50);
}

// Resize the canvas when the window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

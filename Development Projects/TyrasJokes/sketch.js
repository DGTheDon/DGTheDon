// Section 1
function setupSection1() {
    const section = document.getElementById('section1');
    const canvas = createCanvas(section.offsetWidth, section.offsetHeight);
    canvas.parent(section);
  }
  
  function drawSection1() {
    background(220);
    fill(255, 0, 0);
    ellipse(width / 2, height / 2, 100, 100);
  }
  
  // Section 2
  function setupSection2() {
    const section = document.getElementById('section2');
    const canvas = createCanvas(section.offsetWidth, section.offsetHeight);
    canvas.parent(section);
  }
  
  function drawSection2() {
    background(0);
    fill(0, 255, 0);
    rectMode(CENTER);
    rect(width / 2, height / 2, 200, 100);
  }
  
  // Section 3
  function setupSection3() {
    const section = document.getElementById('section3');
    const canvas = createCanvas(section.offsetWidth, section.offsetHeight);
    canvas.parent(section);
  }
  
  function drawSection3() {
    background(0);
    stroke(255);
    strokeWeight(4);
    for (let x = 0; x <= width; x += 20) {
      line(x, 0, x, height);
    }
  }
  
  // Section 4
  function setupSection4() {
    const section = document.getElementById('section4');
    const canvas = createCanvas(section.offsetWidth, section.offsetHeight);
    canvas.parent(section);
  }
  
  function drawSection4() {
    background(0);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text('Stunning!', width / 2, height / 2);
  }
  
  function setup() {
    setupSection1();
    setupSection2();
    setupSection3();
    setupSection4();
  }
  
  function draw() {
    drawSection1();
    drawSection2();
    drawSection3();
    drawSection4();
  }
  
  // Run the animations
  new p5();
  
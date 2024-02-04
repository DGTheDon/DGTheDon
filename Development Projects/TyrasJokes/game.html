<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS Game</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
    }
    #game-container {
      width: 100%;
      max-width: 100vh;
      max-height: 56.25vh; /* 16:9 aspect ratio (100/16 * 9) */
      position: relative;
      overflow: hidden;
    }
    #game-container canvas {
      position: absolute;
      top: 0;
      left: 0;
    }
  </style>
</head>
<body>
  <div id="game-container"></div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
  <script>
    // Game variables
    let x, y;
    let angle = 0;

    function setup() {
      const gameContainer = document.getElementById('game-container');
      const canvas = createCanvas(gameContainer.offsetWidth, gameContainer.offsetHeight);
      canvas.parent(gameContainer);

      x = width / 2;
      y = height / 2;
    }

    function draw() {
      // Animated background gradient
      setGradient(0, 0, width, height, color(255, 0, 0), color(255, 165, 0), color(255, 255, 0), angle);

      // Floating character
      fill(255);
      circle(x, y, 50);

      // Update angle for the background gradient animation
      angle += 0.01;
    }

    function keyPressed() {
      if (keyCode === UP_ARROW) {
        y -= 10;
      } else if (keyCode === DOWN_ARROW) {
        y += 10;
      } else if (keyCode === LEFT_ARROW) {
        x -= 10;
      } else if (keyCode === RIGHT_ARROW) {
        x += 10;
      }
    }

    function setGradient(x, y, w, h, c1, c2, c3, angle) {
      noFill();
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c2, c3, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    }
  </script>
</body>
</html>

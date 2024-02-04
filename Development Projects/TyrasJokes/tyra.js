<script>
document.getElementById('new-joke').addEventListener('click', function() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').textContent = data.setup + " " + data.punchline;
        })
        .catch(error => console.error(error));
});


<script>
  let balls = [];

  function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 25; i++) {
      balls[i] = new Ball();
    }
  }

  function draw() {
    background(0);

    for (let i = 0; i < balls.length; i++) {
      balls[i].move();
      balls[i].display();
    }
  }

  class Ball {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(10, 30);
      this.xspeed = random(-2, 2);
      this.yspeed = random(-2, 2);
    }

    move() {
      this.x += this.xspeed;
      this.y += this.yspeed;

      if (this.x < 0 || this.x > width) {
        this.xspeed *= -1;
      }

      if (this.y < 0 || this.y > height) {
        this.yspeed *= -1;
      }
    }

    display() {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }
</script>

</script>



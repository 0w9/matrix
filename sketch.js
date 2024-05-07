class Ball {
  constructor(x, y, label, type, color) {
    this.x = x;
    this.y = y;
    this.label = label;
    this.type = type;
    this.color = color;
    this.radius = this.type === "Ingredient" ? 80 : 100;
    this.margin = 50;
  }
}

class Arrow {
  constructor(b1, b2s) {
    this.b1 = b1;
    this.b2s = b2s;
    this.vs = b2s.map(b2 => createVector(b2.x - b1.x, b2.y - b1.y));
  }

  draw() {
    this.vs.forEach((v, i) => {
      // Draw the line
      stroke(0); // Set the line color to black
      strokeWeight(6);
      for (let j = 0; j < v.mag(); j++) {
        point(
          width / 2 + this.b1.x + j * cos(v.heading()),
          height / 2 - this.b1.y - j * sin(v.heading())
        );
      }

      // Draw the ball
      fill(this.b2s[i].color);
      circle(
        width / 2 + this.b2s[i].x,
        height / 2 - this.b2s[i].y,
        this.b2s[i].radius
      );

      // Draw the label
      fill(0);
      textSize(20);
      textAlign(CENTER, CENTER);
      text(this.b2s[i].label, width / 2 + this.b2s[i].x, height / 2 - this.b2s[i].y);
    });

    // Draw the first ball
    fill(this.b1.color);
    circle(
      width / 2 + this.b1.x,
      height / 2 - this.b1.y,
      this.b1.radius
    );

    // Draw the first ball's label
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.b1.label, width / 2 + this.b1.x, height / 2 - this.b1.y);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  i1 = new Ball(width / -2.5, height / 2 - 300, "Flour", "Ingredient", color(255, 0, 0));
  i2 = new Ball(width / -2.5, height / 2 - 200, "Eggs", "Ingredient", color(0, 255, 0));
  i3 = new Ball(width / -2.5, height / 2 - 100, "Sugar", "Ingredient", color(0, 0, 255));
  i4 = new Ball(width / -2.5, height / 2, "Butter", "Ingredient", color(255, 255, 0));
  i5 = new Ball(width / -2.5, height / 2 + 100, "Vanilla Extract", "Ingredient", color(255, 0, 255));
  r1 = new Ball(width / -1.5, height / 2 - 200, "Cake", "Recipe", color(255, 255, 255));
  r2 = new Ball(width / -1.5, height / 2 + 100, "Cookies", "Recipe", color(255, 255, 255));
  arrows = [new Arrow(r1, [i1, i2, i3, i4, i5]), new Arrow(r2, [i1, i2, i3])];
}

function draw() {
  background(255);
  translate(mouseX, mouseY);
  arrows.forEach(arrow => arrow.draw());
}
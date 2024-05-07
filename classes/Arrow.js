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

module.exports = Arrow;
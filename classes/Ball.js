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

module.exports = Ball;
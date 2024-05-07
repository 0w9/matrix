import Ball from "./Ball.js";
import Arrow from "./Arrow.js";

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
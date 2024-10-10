let smallCircles = [];
let commonSpeed = 20; // Common speed for all small circles
let smallCircleDiameter = 10;
let spacing = 100; // Space between small circles
let numCircles = 20; // Number of initial circles

function setup() {
  createCanvas(400, 400);
  // Initialize small circles
  for (let i = 0; i < numCircles; i++) {
    smallCircles.push(new Circle(-smallCircleDiameter/2 - i * spacing, 200));
  }
}

function draw() {
  background(220);
  
  // Draw the big rectangle
  fill(200);
  rect(100, 100, 200, 200);

  // Update and draw circles
  for (let i = 0; i < smallCircles.length; i++) {
    let circle = smallCircles[i];
    circle.update(i > 0 ? smallCircles[i - 1] : null);
    circle.display();
    
    // Check if the circle has reached the right edge of the rectangle
    if (circle.x >= 300 - circle.diameter / 2 && !circle.stopped) {
      circle.stop();
      circle.x = 300 - circle.diameter / 2; // Ensure the circle stops exactly at the edge
    }
  }
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = smallCircleDiameter;
    this.speed = commonSpeed;
    this.stopped = false;
  }

  update(previousCircle) {
    if (!this.stopped) {
      let nextX = this.x + this.speed;
      
      if (previousCircle && nextX + this.diameter / 2 > previousCircle.x - previousCircle.diameter / 2) {
        this.stop();
        this.x = previousCircle.x - previousCircle.diameter / 2 - this.diameter / 2 - 1; // Stop with a 1-pixel gap
      } else {
        this.x = nextX;
      }
    }
  }

  stop() {
    this.stopped = true;
  }

  display() {
    fill(255, 0, 0); // Red color for the circle
    ellipse(this.x, this.y, this.diameter);
  }
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 10;
    this.speed = 20;
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

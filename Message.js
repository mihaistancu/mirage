class Message {
  constructor(x, y, queue) {
    this.x = x;
    this.y = y;
    this.diameter = 10;
    this.speed = 20;
    this.stopped = false;
    this.queue = queue;
  }

  update() {
    if (!this.stopped) {
      let nextX = this.x + this.speed;
      let previous = this.queue.last;
      
      if (previous && nextX + this.diameter / 2 > previous.x - previous.diameter / 2) {
        this.stop();
        this.x = previous.x - previous.diameter / 2 - this.diameter / 2 - 1; // Stop with a 1-pixel gap
        this.queue.last = this;
      } else if (nextX + this.diameter / 2 > this.diameter/2 + this.queue.x + this.queue.width) {
        this.stop();
        this.x = this.queue.x + this.queue.width - this.diameter/2 - 1;
        this.queue.last = this;
      } else
        this.x = nextX;
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

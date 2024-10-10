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
      
      if (this.queue && this.queue.last && nextX + this.diameter / 2 > this.queue.last.x - this.queue.last.diameter / 2) {
        this.stop();
        let previous = this.queue.last;
        this.x = previous.x - previous.diameter / 2 - this.diameter / 2 - 1; // Stop with a 1-pixel gap
        this.queue.last = this;
      } else if (this.queue && nextX + this.diameter / 2 > this.diameter/2 + this.queue.x + this.queue.width) {
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

  resume() {
    this.queue = null;
    this.stopped = false;
  }

  display() {
    fill(255, 0, 0); // Red color for the circle
    ellipse(this.x, this.y, this.diameter);
  }
}

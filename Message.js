class Message {
  constructor() {
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
    this.x = 0;
    this.y = 0;
    this.diameter = 10;
    this.speed = 1;
    this.stopped = false;
    this.queue = null;
  }

  update() {
    if (this.stopped) {
      return 
    }
  
    this.x += this.speed;

    if (this.queue) {
      if (this.queue.hasReceived(this)) {
        this.queue.enqueue(this);
      }
    }
  }

  sendTo(queue) {
    this.queue = queue;
    this.x = 0;
    this.y = queue.y + queue.height / 2;
    this.stopped = false;
  }

  stop() {
    this.stopped = true;
  }

  resume() {
    this.stopped = false;
  }

  display() {
    fill(this.red, this.green, this.blue); 
    ellipse(this.x, this.y, this.diameter);
  }
}

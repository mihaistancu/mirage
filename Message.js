class Message {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
    this.x = x;
    this.y = y;
    this.diameter = 1;
    this.speed = 10;
    this.stopped = false;
    this.target = null;
  }

  update() {
    if (this.stopped) {
      return 
    }
  
    this.moveTowardsTarget();

    if (this.hitTarget()) {
      this.target.receive(this);
    }  
  }

  moveTowardsTarget() {
    let dx = this.target.getX() - this.x;
    let dy = this.target.getY() - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.speed) {
      this.x = this.target.getX();
      this.y = this.target.getY();
    } else {
      let angle = Math.atan2(dy, dx);
      this.x += Math.cos(angle) * this.speed;
      this.y += Math.sin(angle) * this.speed;
    }
  }

  hitTarget() {
    return this.x + this.diameter / 2 + 3 > this.target.getX();
  }

  sendTo(queue) {
    this.target = queue;
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

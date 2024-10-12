class Emitter {
  constructor(x, y, config, max, queue, messages) {
    this.x = x;
    this.y = y;
    this.config = config;
    this.frame = 0;
    this.count = 0;
    this.max = max;
    this.queue = queue;
    this.messages = messages;
  }

  update() {
    this.frame++;

    if (this.frame >= this.config.freq() && this.count < this.max) {
      this.emit();
      this.frame = 0;
    }
  }

  display() {
    rect(this.x, this.y, 10, 10);
    fill(0);
    textAlign(CENTER, TOP);
    textSize(12);
    text(this.count, this.x + 5, this.y + 15);
  }

  emit() {
    let message = new Message(this.x, this.y);
    message.sendTo(this.queue);
    this.messages.push(message);
    this.count++;
  }
}

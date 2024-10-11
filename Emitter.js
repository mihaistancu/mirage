class Emitter {
  constructor(config, max, queue) {
    this.config = config;
    this.frame = 0;
    this.count = 0;
    this.max = max;
    this.queue = queue;
  }

  update(messages) {
    this.frame++;

    if (this.frame >= this.config.freq() && this.count < this.max) {
      let message = new Message(0, 0);
      message.sendTo(this.queue);
      messages.push(message);
      this.count++;
      this.frame = 0;
    }
  }
}
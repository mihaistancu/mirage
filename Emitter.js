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
      this.emit(messages);
      this.count++;
      this.frame = 0;
    }
  }

  emit(messages) {
    let message = new Message();
    message.sendTo(this.queue);
    messages.push(message);
  }
}

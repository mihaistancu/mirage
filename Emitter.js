class Emitter {
  constructor(frequency, max, queue) {
    this.frequency = frequency;
    this.frame = 0;
    this.count = 0;
    this.max = max;
    this.queue = queue;
  }

  update(messages) {
    this.frame++;

    if (this.frame >= this.frequency && this.count < this.max) {
      messages.push(new Message(0, this.queue.y + this.queue.height / 2, this.queue));
      this.count++;
      this.frame = 0;
    }
  }
}

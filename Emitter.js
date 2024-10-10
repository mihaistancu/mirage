class Emitter {
  constructor() {
    this.frequency = 20;
    this.frame = 0;
    this.count = 0;
    this.max = 10;
  }

  update(messages) {
    this.frame++;

    if (this.frame >= this.frequency && this.count < this.max) {
      messages.push(new Message(0, 200));
      this.count++;
      this.frame = 0;
    }
  }
}

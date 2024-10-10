class Emitter {
  constructor() {
    this.frequency = 10;
    this.counter = 0;
  }

  update(messages) {
    this.counter++;

    if (this.counter >= this.frequency) {
      messages.push(new Message(0, 200));
      this.counter = 0;
    }
  }
}

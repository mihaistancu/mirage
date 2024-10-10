class Consumer {
    constructor(frequency, queue) {
      this.frequency = frequency;
      this.frame = 0;
      this.queue = queue;
    }
  
    update(messages) {
      this.frame++;
  
      if (this.frame >= this.frequency) {
        this.frame = 0;
        this.consume(messages);
      }
    }

    consume(messages) {
      for (let message of messages) {
        if (message.queue === this.queue && message.stopped) {
            message.resume();
            break;
        }
      }

      for (let message of messages) {
        if (message.queue === this.queue) {
            message.x += message.diameter + 1;
        }
      }
    }
}

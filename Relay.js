class Relay {
    constructor(config, sourceQueue, targetQueue) {
      this.config = config;
      this.frame = 0;
      this.sourceQueue = sourceQueue;
      this.targetQueue = targetQueue;
    }
  
    update() {
      this.frame++;
  
      if (this.frame >= this.config.freq()) {
        this.frame = 0;
        this.relay();
      }
    }

    relay() {
      let message = this.sourceQueue.dequeue();
      if (message) {
        message.sendTo(this.targetQueue);
      }
    }
}

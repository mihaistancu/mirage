class Consumer {
    constructor(config, queue) {
      this.config = config;
      this.frame = 0;
      this.queue = queue;
    }
  
    update() {
      this.frame++;
  
      if (this.frame >= this.config.freq()) {
        this.frame = 0;
        this.consume();
      }
    }

    consume() {
        let message = this.queue.dequeue();
        if (message) {
            message.sendTo({
                getX: function() {
                    return 10000;
                },
                getY: function() {
                    return this.queue.y;
                }
            });
            message.resume();
        }
    }
}

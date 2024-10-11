class Queue {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.messages = [];
    this.endOfQueue = this.x + this.width;
  }

  display() {
    fill(200);
    rect(this.x, this.y, this.width, this.height);
  }
  
  hasReceived(message) {
    return message.hit(this.endOfQueue);
  }

  enqueue(message) {
    this.messages.push(message);
    message.x = this.endOfQueue - message.diameter;
    this.endOfQueue -= message.diameter;
    message.stopped = true;
  }

  dequeue() {
    let message = this.messages.shift();
    if (message) {  
      this.endOfQueue += message.diameter;
      message.x += message.diameter;
      for (let message of this.messages) {
        message.x += message.diameter;
      }
    }
    return message;
  }
}

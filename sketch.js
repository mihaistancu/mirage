let messages = [];
let emitter;
let queue;

function setup() {
  createCanvas(400, 400);

  emitter = new Emitter();
  queue = new Queue(100, 100, 200, 200);
}

function draw() {
  background(220);

  emitter.update(messages);

  queue.display();
  
  for (let i = messages.length - 1; i >= 0; i--) {
    let message = messages[i]
    message.update(messages[i-1]);
    message.display();
    
    if (message.x >= queue.x + queue.width - message.diameter / 2 && !message.stopped) {
      message.stop();
      message.x = queue.x + queue.width - message.diameter / 2; // Ensure the circle stops exactly at the edge
    }
  }
}
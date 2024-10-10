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
  
  // Update and display circles
  for (let i = messages.length - 1; i >= 0; i--) {
    let circle = messages[i]
    circle.update(messages[i-1]);
    circle.display();
    
    if (circle.x >= queue.x + queue.width - circle.diameter / 2 && !circle.stopped) {
      circle.stop();
      circle.x = queue.x + queue.width - circle.diameter / 2; // Ensure the circle stops exactly at the edge
    }
  }
}
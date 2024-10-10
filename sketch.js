let circles = [];
let emitter;
let topic;

function setup() {
  createCanvas(400, 400);

  emitter = new Emitter();
  topic = new Topic(100, 100, 200, 200);
}

function draw() {
  background(220);

  emitter.update();

  topic.display();
  
  // Update and display circles
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i]
    circle.update(circles[i-1]);
    circle.display();
    
    if (circle.x >= topic.x + topic.width - circle.diameter / 2 && !circle.stopped) {
      circle.stop();
      circle.x = topic.x + topic.width - circle.diameter / 2; // Ensure the circle stops exactly at the edge
    }
  }
}

class Emitter {
  constructor() {
    this.frequency = 10; 
    this.counter = 0;
  }
  
  update() {
    this.counter++;
    
    if (this.counter >= this.frequency) {
      circles.push(new Event(0, 200));
      this.counter = 0;
    }
  }
}

let messages = [];
let emitters;
let queues;
let consumers;

function setup() {
  createCanvas(400, 400);

  queues = [
    new Queue(100, 10, 150, 20), 
    new Queue(100, 50, 150, 20)
  ];

  emitters = [
    new Emitter({ freq: () => 20 + random(20) }, 1000000, queues[0]), 
    new Emitter({ freq: () => 1 + random(30) }, 1000000, queues[1])
  ];

  consumers = [
    new Consumer({ freq: () => 20 + random(20) }, queues[0]),
    new Consumer({ freq: () => 1 + random(30)}, queues[1])
  ]
}

function draw() {
  update();
  display();
}

function update() {
  for (let emitter of emitters) {
    emitter.update(messages);
  }

  for (let message of messages) {
    message.update();
  }

  for (let consumer of consumers) {
    consumer.update(messages);
  }
}

function display() {
  background(220);

  for (let queue of queues) {
    queue.display();
  }

  for (let message of messages) {
    message.display();
  }
}
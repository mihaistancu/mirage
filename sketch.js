let messages = [];
let emitters;
let queues;
let consumers;

function setup() {
  createCanvas(400, 400);

  queues = [
    new Queue(150, 10, 150, 20), 
    new Queue(150, 50, 150, 20)
  ];

  emitters = [
    new Emitter({ freq: () => 10 + random(40)*5 }, 1000000, queues[0])
  ];

  consumers = [
    new Relay({ freq: () => 10 + random(40)*5 }, queues[0], queues[1]),
    new Consumer({ freq: () => 10 + random(40)*5}, queues[1])
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
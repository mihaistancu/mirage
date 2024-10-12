let messages = [];
let emitters;
let queues;
let consumers;

function setup() {
  createCanvas(1000, 400);

  queues = [
    new Queue(100, 10, 150, 20), 
    new Queue(400, 10, 150, 20),
    new Queue(700, 10, 150, 20)
  ];

  emitters = [
    new Emitter({ freq: () =>  random(40) }, 1000000, queues[0])
  ];

  consumers = [
    new Relay({ freq: () => random(40) }, queues[0], queues[1]),
    new Relay({ freq: () => random(40) }, queues[1], queues[2]),
    new Consumer({ freq: () => random(40)}, queues[2])
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
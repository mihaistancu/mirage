let messages = [];
let emitters;
let queues;
let consumers;

function setup() {
  createCanvas(1000, 400);

  queues = [
    new Queue(100, 10, 150, 20), 
    new Queue(400, 100, 150, 20),
    new Queue(700, 10, 150, 20),
    new Sink(950, 200, messages)
  ];

  emitters = [
    new Emitter(10, 200, { freq: () =>  random(20) }, 1000000, queues[0], messages),
    new Emitter(200, 200, { freq: () =>  random(60) }, 1000, queues[1], messages)
  ];

  consumers = [
    new Relay({ freq: () => random(20) }, queues[0], queues[1]),
    new Relay({ freq: () => random(10) }, queues[1], queues[2]),
    new Relay({ freq: () => random(15)}, queues[2], queues[3])
  ]
}

function draw() {
  update();
  display();
}

function update() {
  for (let emitter of emitters) {
    emitter.update();
  }

  for (let message of messages) {
    message.update();
  }

  for (let consumer of consumers) {
    consumer.update();
  }
}

function display() {
  background(220);

  for (let emitter of emitters) {
    emitter.display();
  }

  for (let queue of queues) {
    queue.display();
  }

  for (let message of messages) {
    message.display();
  }
}
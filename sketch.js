let smallCircles = [];
let commonSpeed = 20; // Common speed for all small circles
let smallCircleDiameter = 10;
let spacing = 100; // Space between small circles
let numCircles = 20; // Number of initial circles

let topic;

function setup() {
  createCanvas(400, 400);
  // Initialize small circles
  for (let i = 0; i < numCircles; i++) {
    smallCircles.push(new Event(-smallCircleDiameter/2 - i * spacing, 200));
  }
  // Initialize the topic (big rectangle)
  topic = new Topic(100, 100, 200, 200);
}

function draw() {
  background(220);
  
  // Draw the topic (big rectangle)
  topic.display();

  // Update and draw circles
  for (let i = 0; i < smallCircles.length; i++) {
    let circle = smallCircles[i];
    circle.update(i > 0 ? smallCircles[i - 1] : null);
    circle.display();
    
    // Check if the circle has reached the right edge of the rectangle
    if (circle.x >= topic.x + topic.width - circle.diameter / 2 && !circle.stopped) {
      circle.stop();
      circle.x = topic.x + topic.width - circle.diameter / 2; // Ensure the circle stops exactly at the edge
    }
  }
}



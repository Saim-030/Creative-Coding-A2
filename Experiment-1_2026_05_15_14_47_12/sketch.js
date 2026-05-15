let clockShape = "circle"; // circle, square, triangle

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(30);
  translate(width/2, height/2);
  
  // Current Time
  let h = hour();
  let m = minute();
  let s = second();
  
  // Clock Face (changes shape on click)
  stroke(255);
  strokeWeight(2);
  noFill();
  
  if(clockShape == "circle") {
    circle(0, 0, 300);
  } else if(clockShape == "square") {
    rectMode(CENTER);
    rect(0, 0, 280, 280);
  } else if(clockShape == "triangle") {
    triangle(0, -150, -130, 100, 130, 100);
  }
  
  // Hour Marks and Digits
  for(let i = 1; i <= 12; i++) {
    let angle = i * 30 - 90;
    
    if(i !== 1) {
      let x1 = 125 * cos(angle);
      let y1 = 125 * sin(angle);
      let x2 = 140 * cos(angle);
      let y2 = 140 * sin(angle);
      line(x1, y1, x2, y2);
    }
    
    // Digits Positions
    let x = 110 * cos(angle);
    let y = 110 * sin(angle);
    fill(255);
    noStroke();
    textSize(20);
    text(i, x, y);
  }
  
  // Hour Hand
  let hourAngle = (h % 12) * 30 + m * 0.5;
  push();
  rotate(hourAngle);
  stroke(255);
  strokeWeight(6);
  line(0, 0, 0, -70);
  pop();
  
  // Minute Hand
  let minuteAngle = m * 6 + s * 0.1;
  push();
  rotate(minuteAngle);
  stroke(200);
  strokeWeight(4);
  line(0, 0, 0, -110);
  pop();
  
  // Second Hand
  let secondAngle = s * 6;
  push();
  rotate(secondAngle);
  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, 0, 0, -130);
  pop();
  
  // Digital Time Display
  let timeStr = nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2);
  fill(255, 200, 0);
  textSize(24);
  text(timeStr, 0, 180);
  
  // Center Dot
  fill(255);
  noStroke();
  circle(0, 0, 8);
}

function mouseClicked() {
  // Cycle through clock shapes
  if(clockShape == "circle") {
    clockShape = "square";
  } else if(clockShape == "square") {
    clockShape = "triangle";
  } else {
    clockShape = "circle";
  }
}
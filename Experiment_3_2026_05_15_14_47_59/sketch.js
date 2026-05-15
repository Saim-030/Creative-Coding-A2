let player1 = 0;
let player2 = 0;
let winner = null;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(0);
  
  // Race Tracks
  fill(100);
  rect(50, 100, 500, 40);
  rect(50, 250, 500, 40);
  
  // Players
  fill(255, 0, 0);
  circle(50 + player1, 120, 30);
  fill(0, 0, 255);
  circle(50 + player2, 270, 30);
  
  //Labels
  fill(255);
  text("Player A (press A)", 300, 80);
  text("Player B (press B)", 300, 230);
  
  // Win Message
  if(winner == "A") {
    textSize(32);
    fill(255, 0, 0);
    text("Player A Wins!", width/2, 350);
    noLoop();
  } else if(winner == "B") {
    textSize(32);
    fill(0, 0, 255);
    text("Player B Wins!", width/2, 350)
    noLoop();
  }
}

function keyPressed() {
  if(winner) return;
  
  // Player A presses A
  if(key == 'a' || key == 'A') {
    player1 += 15;
    if(player1 >= 500) winner = "A";
  }
  
  // Player B presses B
  if(key == 'b' || key == 'L') {
    player2 += 15;
    if(player2 >= 500) winner = "B";
  }
}
let video;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.size(80, 60);
  video.hide();
  noStroke();
}

function draw() {
  background(0);
  video.loadPixels();
  
  //Original
  image(video, 0, 0, 160, 120);
  
  //ASCII ART
  let ascii = " .:-=+*#%@";
  for(let y = 0; y < video.height; y += 8) {
    for(let x = 0; x < video.width; x += 6) {
      let index = (x + y * video.width) * 4;
      let bright = video.pixels[index];
      let charIndex = floor(map(bright, 0, 255, 0, ascii.length-1));
      fill(255);
      text(ascii[charIndex], 180 + x, y + 40);
    }
  }
  
  // Wave Form
  for(let y = 0; y < video.height; y += 4) {
    let sum = 0;
    for(let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      sum += video.pixels[index];
    }
    let avg = sum / video.width;
    let barHeight = map(avg, 0, 255, 0, 80);
    fill(0, 255, 100);
    rect(380, y + 40, barHeight, 3);
  }
  
  // Simple Stripes
  for(let y = 0; y < video.height; y++) {
    let index = (0 + y * video.width) * 4;
    let bright = video.pixels[index];
    let w = map(bright, 0, 255, 5, 200);
    
    fill(bright, 100, 200);
    rect(580, y * 2 + 50, w, 4);
  }
}
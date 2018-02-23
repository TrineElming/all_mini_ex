function setup() {
 createCanvas(windowWidth, windowHeight);
 background(250, 200, 200);
 frameRate (30);
}

function draw() {
 noStroke();
 fill(250, 200, 200, 80);
 rect(0, 0, width, height);
 drawThrobber(40);
}

function drawThrobber(num) {
  translate(width/2, height/2);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  fill(255, 255, 102);
  ellipse(10, 10, 10, 10, 10);
  fill(102, 255, 102);
  ellipse(15, 15, 10, 10, 10);
  fill(255, 153, 51);
  ellipse(20, 20, 10, 10, 10);
  fill(255, 51, 51);
  ellipse(25, 25, 10, 10, 10);
  fill(0, 255, 255);
  ellipse(30, 30, 10, 10, 10);
  fill(51, 153, 255);
  ellipse(35, 35, 10, 10, 10);
}

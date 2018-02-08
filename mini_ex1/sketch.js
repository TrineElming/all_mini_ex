function setup() {
createCanvas(700,700);
frameRate(5);
}

function draw() {
  background(220, 150, 150);

fill('#fae');
rect(30, 20, 400, 400);

  fill('hsb(150, 100%, 50%)');
  rect(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
}

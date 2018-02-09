function setup() {
createCanvas(700,700);
frameRate(5);
}

function draw() {
  background('pink');

fill('lightgreen');
rect(30, 20, 400, 400);

  fill('lightblue');
  rect(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
}

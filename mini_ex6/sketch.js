function preload() {
  img = loadImage('data/skyline.png')
}

var allpoints = 500;
var steps = allpoints + 1;

function setup() {
  createCanvas(700, 700);
  strokeWeight(1);
  stroke(238, 238, 160);
  frameRate(0.5);
}

function draw() {
  background(28, 48, 94);
  var rand = 0;
  for  (var i = 5; i < steps; i++) {
    point((width/steps) * i, (height/2) + random(-rand, rand));
    rand += random(-100, 100);
  }

image(img, -20, 300, 1300, 450);

}

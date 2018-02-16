var on = false;
var on2 = false;
var on3 = false;
var on4 = false;
var img;
var img2;
var img3;
var img4;
var sun1;
var sun2;
var rect1;
var rect2;
var rect3;
var rect4;
var rect5;
var rect6;
function preload() {
img = loadImage('data/monet.jpg');
img2 = loadImage('data/lundstroem.jpg');
img3 = loadImage('data/magritte.jpg');
img4 = loadImage('data/dali.jpg');
}

function setup() {
  createCanvas(850, 700);
  sun1 = 255;
  sun2 = 0;
  rect1 = 255;
  rect2 = 0;
  rect3 = 255;
  rect4 = 0;
  rect5 = 255;
  rect6 = 0;
}

function draw() {
  background(250, 200, 200);

textSize(32);
fill('#FFA07A');
text('press the shapes', 150, 40);

fill(255, 230, 50);
noStroke();
ellipse(780, 120, 180, 180);

fill('#808000');
noStroke();
rect(50, 0, 80, 700);

fill('lightblue');
noStroke();
rect(250, 230, 260, 230);

fill('#008000')
noStroke();
rect(550, 200, 50, 120);

tint(sun1,sun2);
image(img, 90, 18, 760, 620);
if (on) {
  sun2 = 255;
} else {
  sun2 = 0;
  }

tint(rect1, rect2);
image(img2, 305, 50, 480, 700);
if (on2) {
  rect2 = 255;
} else {
  rect2 = 0;
  }

tint(rect3, rect4);
image(img3, 30, 15, 520, 640);
if (on3) {
  rect4 = 255;
} else {
  rect4 = 0;
  }

tint(rect5, rect6);
image(img4, -30, 0, 850, 700);
if (on4) {
  rect6 = 255;
} else {
  rect6 = 0;
  }

}
function mousePressed() {
  if (mouseX > 690 && mouseX < 849 && mouseY > 31 && mouseY < 211) {
    if(on) {
      on = false;
    } else {
      on = true;
    }
  }
  if (mouseX > 533 && mouseX < 630 && mouseY > 203 && mouseY < 401) {
    if(on2) {
      on2 = false;
    } else {
      on2 = true;
    }
  }
  if (mouseX > 250 && mouseX < 509 && mouseY > 232 && mouseY < 461) {
    if(on3) {
      on3 = false;
    } else {
      on3 = true;
    }
  }
  if(mouseX > 51 && mouseX < 131 && mouseY > 4 && mouseY < 700) {
    if(on4) {
      on4 = false;
    } else {
      on4 = true;
    }
  }
}

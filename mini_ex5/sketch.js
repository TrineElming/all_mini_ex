let scoop;
let scoop2;
let scoop3;
var show = false;
var show2 = false;
var show3 = false;
var mouse = 0;

function setup() {
  createCanvas(700, 650);
  //pink
  scoop = new Scoop(318, 300, color(255, 200, 200));
  //yellow
  scoop2 = new Scoop(350, 240, color(229, 226, 153));
  //blue
  scoop3 = new Scoop(382, 300, color(170, 229, 227));
}

function draw() {
background(186, 222, 163);

if (show) {
  scoop.show();
if (show2) {
  scoop2.show();
if (show3) {
  scoop3.show();
}
}
}

//cone
fill('#F5DEB3');
strokeWeight(1.5);
stroke('#DAA520');
beginShape(TRIANGLES);
vertex(350, 550);
vertex(420, 320);
vertex(280, 320);
endShape(CLOSE);

fill('#DAA530');
line(365, 500, 310, 320);
line(380, 450, 340, 320);
line(395, 400, 370, 320);
line(410, 350, 400, 320);
line(290, 353, 300, 320);
line(305, 400, 330, 320);
line(320, 450, 360, 320);
line(335, 500, 390, 320);

textSize(40);
noStroke();
fill(118, 174, 129);
text('click for ice cream!', 10, 50);

}

function mouseClicked() {
  mouse = mouse + 1;
  if (mouse == 1) {
    show = true;
  }
  if (mouse == 2) {
    show2 = true;
  }
  if (mouse == 3) {
    show3 = true;
  }
}

class Scoop {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

show() {
  noStroke();
  fill(this.color);
  ellipse(this.x, this.y, 85, 85);
}
}

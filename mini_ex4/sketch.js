var button;
var display = true;

function preload() {
img = loadImage('data/hand.png');

}

function setup() {
createCanvas(730, 700);
  var button = createButton('GO');
  var col = color(208, 198, 108);
  button.style('background-color', col);
  button.position(14, 45);
  button.mousePressed(palmreading);
}

function draw() {
background(186, 222, 163);

textSize(18);
fill(107, 152, 81);
text('place your hand on the screen and press GO', 15, 30);

if(display) {
image(img, 40, 40, 650, 650);
} else {
  textSize(20);
  fill(107, 152, 81);
  text('this is what your palm says about you:', 15, 150);

  textSize(15);
  fill(108, 152, 165);
  text('your Head Line is long and straight:', 15, 200)
  text('analyze much?', 15, 220);
  text('you often find yourself mulling things over and over before coming to a decision.', 15, 240);

  fill(183, 174, 85);
  text('your Heart Line is short and straight:', 15, 290);
  text('you need your freedom. you show your love through actions more than words.', 15, 310);

  fill(201, 158, 120);
  text('your Life Line is faint:', 15, 360)
  text('you may need to chill out now and then.', 15, 380);
  text('yoga, meditation, walking, or taking time to play could do you good.', 15, 400);
}
}
function palmreading() {
  display = false;
}

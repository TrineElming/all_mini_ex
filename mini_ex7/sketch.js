var bobby = false; //variable for every second line switching places

function preload() {
  img = loadImage('data/tove.jpg') //background-image

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  blink = loadStrings('data/Blink.txt') //using loadStrings to load a text as coherent
  sind = loadStrings('data/Pigesind.txt')
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  textSize(14);
  textFont('Courier New');
  strokeWeight(1);
  stroke(255, 225, 6);
  fill(255, 225, 6);
    if(bobby == false) {
      for (var i = 0; i < blink.length; i++) {
        text(blink[i], width/2+200, 200+i*20); //Blinkende lygter - Tove Ditlevsen
        text(sind[i], width/2-600, 100+i*20); //Pigesind - Tove Ditlevsen
    }
  } else {
      for (var i = 0; i < blink.length; i++) {
        if(i%2==0){
          text(sind[i], width/2+200, 200+i*20); //every second line switching places
          text(blink[i], width/2-600, 100+i*20); //every second line switching places
          } else {
              text(blink[i], width/2+200, 200+i*20); //every second line switching places
              text(sind[i], width/2-600, 100+i*20); //every second line switching places
      }
      }
  }
}

function mousePressed() { //every second line switching places when mouse is pressed
  bobby = !bobby;
}

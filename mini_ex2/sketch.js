function setup() {
  createCanvas(850,700, WEBGL)
}

function draw() {
  background(250, 200, 200);

//monet
  fill(255, 230, 50);
  noStroke();
  ellipse(330, -220, 150, 150);

//dalí
  fill('#808000');
  noStroke();
  rect(-350, -350, 80, 700);

//magritte
  fill('lightblue');
  noStroke();
  rect(-100, -50, 300, 300);

//lundstrøm
  fill('#008000')
  noStroke();
  rect(-250, -200, 80, 200);

}

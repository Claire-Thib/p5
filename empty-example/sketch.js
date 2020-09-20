let button;
function setup() {
  createCanvas(windowWidth, windowHeight);

  ring = loadImage("https://cdn.glitch.com/c02ee8f4-aba0-4a23-a05a-e25ad2f42c63%2FtreeRing.png?v=1600580843621");
  realtree = loadImage("https://cdn.glitch.com/c02ee8f4-aba0-4a23-a05a-e25ad2f42c63%2Frealtree.png?v=1600581034759");


  button = createButton('Next Page');
  button.position(19, 19);
  button.mousePressed(changeBG);
}

function draw() {
  background(color(143, 181, 133));
  textFont("Playfair Display")
  textSize(width*0.06);
  fill(0);
  text("Determing the Age of A Tree",width*0.15,height*0.15);

  image(realtree,width*0.7,height*0.3,width*0.3,height*0.7);

  textFont("Oswald")
  textSize(width*0.025);
  fill(0);
  text("There are a couple ways to determine the age of a tree", width*0.06, height *0.25);
  text("One way is to count its rings", width*0.06, height *0.32);
  text("Growth Rings are created every year when a brand new layer of wood grows", width*0.06, height *0.39);
  text("The darker portion is called summerwood and the lighter is called springwood ", width*0.06, height *0.46);
  text("So a lighter ring + darker ring = one year", width*0.06, height *0.53);

  image(ring, 100,100,100,100);
}

function changeBG(){
  window.location.href = "interactive.html";
}
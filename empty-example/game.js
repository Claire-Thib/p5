let slider,button1,button2, radio, music;
function setup() {
  createCanvas(windowWidth, windowHeight);

  bark = loadImage("https://cdn.glitch.com/c02ee8f4-aba0-4a23-a05a-e25ad2f42c63%2Fbark.png?v=1600577376455");
  tree = loadImage("https://cdn.glitch.com/c02ee8f4-aba0-4a23-a05a-e25ad2f42c63%2Ftree.png?v=1600577906159");


  slider = createSlider(0, 81, 0);
  slider.position(width * 0.15, height*0.8);
  sliderLength = str(width/2) + "px";
  slider.style('width', sliderLength);

  button1 = createButton('Previous');
  button1.size('Previous',height*0.06);
  button1.position(width*0.7,height*0.78);
  button1.mousePressed(previousBackground);

  button2 = createButton('Next');
  button2.size(width*0.1, height*0.06);
  button2.position(width*0.83,height*0.78);
  button2.mousePressed(nextBackground);

  music = createButton('Vibez?');
  music.position(width*0.03, height*0.9);
  music.size('Vibez?', height*0.06);
  music.mousePressed(goMusic);

}

function draw() {
  clear();
  background(color(120, 155.37, 195));

  textFont("Playfair Display");
  textSize(width*0.06);
  fill(0);
  text("The Aging of A Tree",width*0.15,height*0.19);
  textSize(width*0.03);
  text("(Looking at the Trunk)",width*0.6,height*0.25);

  textFont("Oswald");
  fill(0);
  textSize(width*0.025);
  text("Time:", width*0.09, height *0.83);


  squareColor = color(178.5, 155.47, 101.75);
  squareColor.setAlpha(80);
  fill(squareColor);
  stroke(102,79,25);

  let val = slider.value();
  if(val > 10){
    ellipse(width*0.401, height*0.5, width*0.04, width*0.04);
  }
  if(val > 20){
    ellipse(width*0.401, height*0.502, width*0.06, width*0.06);
  }
  if(val > 30){
    ellipse(width*0.403, height*0.501, width*0.09, width*0.09);
  }
  if(val > 40){
    ellipse(width*0.401, height*0.5, width*0.11, width*0.11);
  }
  if(val > 50){
    ellipse(width*0.4, height*0.503, width*0.14, width*0.14);
  }
  if(val > 60){
    ellipse(width*0.402, height*0.503, width*0.17, width*0.17);
  }
  if(val > 70){
    ellipse(width*0.402, height*0.5, width*0.21, width*0.21);
  }
  if(val > 80){
    ellipse(width*0.401, height*0.5, width*0.22, width*0.22);
    noFill();
    strokeWeight(6);
    ellipse(width*0.401, height*0.5, width*0.225, width*0.225);
    strokeWeight(1);

    fill(0);
    textSize(width*0.019);
    text("Hover over the trunk to see it labeled", width*0.05, height*0.7);

    stroke(3)
    if(mouseX > width*.28 && mouseX < width*0.53 && mouseY > height*0.33 && mouseY < height *0.67){
      line(width*0.517,height*0.5,width*0.6,height*0.4);
      text("Bark - conserves and protects tree", width*0.61,height*0.4);
      line(width*0.49,height*0.55,width*0.6,height*0.5);
      text("Springwood - formed earlier during grower season", width*0.61,height*0.5);
      text("and made up of tissues with wider vessels which is", width*0.61,height*0.54);
      text(" why springwood is usually thicker than summerwood", width*0.61,height*0.58);
      line(width*.451,height*0.59,width*0.6,height*0.65);
      text("Summerwood -grows slower because", width*0.61,height*0.648);
      text("composed of tissues with narrower vessels ", width*0.61,height*0.688);

      strokeWeight(8);
      point(width*0.517,height*0.5);
      point(width*0.49,height*0.55);
      point(width*.451,height*0.593);
      strokeWeight(1);
    }

  }

  textSize(width*0.025);
  fill(0)
  if(val > 80){
    text("Eight Years", width*0.1, height *0.5);
  }else if(val>70){
    text("Seven Years", width*0.1, height *0.5);
  }else if(val>60){
    text("Six Years", width*0.1, height *0.5);
  }else if(val>50){
    text("Five Years", width*0.1, height *0.5);
  }else if(val>40){
    text("Four Years", width*0.1, height *0.5);
  }else if(val>30){
    text("Three Years", width*0.1, height *0.5);
  }else if(val>20){
    text("Two Years", width*0.1, height *0.5);
  }else if(val>10){
    text("One Year", width*0.1, height *0.5);
  }

  text("Age of Tree:", width* 0.05, height*0.4, width*0.6,height*0.25);
  
}

function previousBackground(){
  window.location.href = "index.html";
}

function nextBackground(){
    window.location.href = "labeling.html";
  }

function goMusic(){
  window.location.href = "music.html";
}
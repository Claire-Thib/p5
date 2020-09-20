let slider,button;
function setup() {
  createCanvas(windowWidth, windowHeight);

  bark = loadImage("https://cdn.glitch.com/c02ee8f4-aba0-4a23-a05a-e25ad2f42c63%2Fbark.png?v=1600577376455");
  tree = loadImage("https://cdn.glitch.com/c02ee8f4-aba0-4a23-a05a-e25ad2f42c63%2Ftree.png?v=1600577906159");


  slider = createSlider(0, 81, 0);
  slider.position(width * 0.2, height*0.9);
  sliderLength = str(width/2) + "px";
  slider.style('width', sliderLength);

  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(changeBG);
}

function draw() {
  clear();
  background(color(120, 155.37, 195));
  image(tree, width*0.07,height*0.3,width*0.3,width*0.3);
  
  // noStroke();
  // fill(color(176, 192, 0));
  // ellipse(width*0.6, height*0.6, width*0.03, width*0.03);
  // stroke();
  text("Time:", width*0.14, height *0.9);


  squareColor = color(178.5, 155.47, 101.75);
  squareColor.setAlpha(80);
  fill(squareColor);

  let val = slider.value();
  if(val > 10){
    ellipse(width*0.6, height*0.6, width*0.03, width*0.03);
  }
  fill(squareColor);
  if(val > 20){
    ellipse(width*0.601, height*0.601, width*0.05, width*0.05);
  }
  fill(squareColor);
  if(val > 30){
    ellipse(width*0.601, height*0.602, width*0.07, width*0.07);
  }
  fill(squareColor);
  if(val > 40){
    ellipse(width*0.601, height*0.6, width*0.09, width*0.09);
  }
  fill(squareColor);
  if(val > 50){
    ellipse(width*0.602, height*0.601, width*0.11, width*0.11);
  }
  fill(squareColor);
  if(val > 60){
    ellipse(width*0.601, height*0.601, width*0.13, width*0.13);
  }
  fill(squareColor);
  if(val > 70){
    ellipse(width*0.601, height*0.6, width*0.15, width*0.15);
  }
  fill(squareColor);
  if(val > 80){
    ellipse(width*0.6, height*0.601, width*0.17, width*0.17);
    image(bark, width*0.508, height*0.43, width*0.187, width*0.197);

  }

  fill(0)
  if(val > 80){
    text("Eight Years", width*0.4, height *0.7);
  }else if(val>70){
    text("Seven Years", width*0.4, height *0.7);
  }else if(val>60){
    text("Six Years", width*0.4, height *0.7);
  }else if(val>50){
    text("Five Years", width*0.4, height *0.7);
  }else if(val>40){
    text("Four Years", width*0.4, height *0.7);
  }else if(val>30){
    text("Three Years", width*0.4, height *0.7);
  }else if(val>20){
    text("Two Years", width*0.4, height *0.7);
  }else if(val>10){
    text("One Year", width*0.4, height *0.7);
  }


  // image(ring1, 100,100,100,100)
  // if(val > 20){
  //   ellipse(width/1.99, height/2, 75, 75);
  // }
  
}

function changeBG(){
  window.location.href = "index.html";
}
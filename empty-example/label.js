let button1,button1input,button2input, input1, input2, buttonCheck1, buttonCheck2, guess1, guess2, giveup1, giveup2;
let outline1, outline2, music;

function setup() {
    createCanvas(windowWidth, windowHeight);

    trunk1 = loadImage("https://cdn.glitch.com/c02ee8f4-aba0-4a23-a05a-e25ad2f42c63%2Fring.png?v=1600661996661");
    trunk1Answer = loadImage("https://cdn.glitch.com/c02ee8f4-aba0-4a23-a05a-e25ad2f42c63%2Fring%20copy.png?v=1600661991442");
    trunk2 = loadImage("https://cdn.glitch.com/c02ee8f4-aba0-4a23-a05a-e25ad2f42c63%2Ffir.png?v=1600662046975");
    trunk2Answer = loadImage("https://cdn.glitch.com/c02ee8f4-aba0-4a23-a05a-e25ad2f42c63%2Ffir%20copy.png?v=1600662049542");

    button1 = createButton('Previous');
    button1.size('Previous',height*0.06);
    button1.position(width*0.85,height*0.25);
    button1.mousePressed(previousBackground);

    input1 = createInput('', int); 
    input1.position(width*0.13, height*0.82);
    input1.size(width*0.1);
    input1.input(assignFirst);

    input2 = createInput('', int); 
    input2.position(width*0.6, height*0.82);
    input2.size(width*0.1);
    input2.input(assignSecond);

    music = createButton('Vibez?');
    music.position(width*0.03, height*0.9);
    music.size('Vibez?', height*0.06);
    music.mousePressed(goMusic);

}

function draw(){
    background(color(177,184,243));
    fill(0);

    image(trunk1, width*0.1,height*0.25,width*0.27,height*0.45);
    image(trunk2, width*0.5,height*0.3,width*0.35,height*0.4);

    textFont("Playfair Display");
    textSize(width*0.06);
    text("Testing What You Learned",width*0.15,height*0.19);

    textSize(width*0.019);
    textFont("Oswald");
    text("Enter How Old You think This Tree is:", width*0.13, height*0.78); 
    text("Enter How Old You think This Tree is:", width*0.6, height*0.78); 

    // displaying the answers for #1 after input is correct and button is pressed
    if(guess1 === "9" && button1input){
        text("yeet" ,100,100);
        image(trunk1Answer, width*0.1,height*0.25,width*0.27,height*0.45);
    }else if(guess1 != "9" && button1input){
        alert("Guess Again!");
        guess1 = "";
        button1input = false;
    }

    // displaying the answers for #2 after input is correct and button is pressed
    if(guess2 === "12" && button2input){
        text("yeet" ,100,200);
        image(trunk2Answer, width*0.5,height*0.3,width*0.35,height*0.4);
    }else if(guess2 != "12" && button2input){
        alert("Guess Again!");
        guess2 = "";
        button2input = false;
    }

    //checking if player giving up for left tree ring
    if(outline1 || outline2){
        text("Each light ring + dark ring = 1 year. (we count the ring at the bark as a year too!)",width*0.25,height*0.92);
        text("The labeled ring is now displayed. Don't worry you didn't get it! :)",width*0.25,height*0.97);

        if(outline1){
            image(trunk1Answer, width*0.1,height*0.25,width*0.27,height*0.45);
        }
        if(outline2){
            image(trunk2Answer, width*0.5,height*0.3,width*0.35,height*0.4);
        }
        // input1.remove();
        // button1input = false;
        // giveup1.remove();
    }
}

//switching html files when button is clicked
function previousBackground(){
    window.location.href = "interactive.html";
  }

  //creates check button after someone inputs something in input box
function assignFirst(){
    guess1 = this.value();
    console.log(guess1);

    buttonCheck1 = createButton('Check');
    buttonCheck1.size('Check', height*0.06);
    buttonCheck1.position(width*0.25,height*0.8);
    buttonCheck1.mousePressed(buttonBoolean1);

    giveup1 = createButton("Give Up");
    giveup1.size('Give Up', height*0.06);
    giveup1.position(width*0.35,height*0.8);
    giveup1.mousePressed(explanation1);
    
    console.log("assigned called");
}
function assignSecond(){
    guess2 = this.value();
    console.log(guess2);

    buttonCheck2 = createButton('Check');
    buttonCheck2.size('Check', height*0.06);
    buttonCheck2.position(width*0.73,height*0.8);
    buttonCheck2.mousePressed(buttonBoolean2);

    giveup2 = createButton("Give Up");
    giveup2.size('Give Up', height*0.06);
    giveup2.position(width*0.83,height*0.8);
    giveup2.mousePressed(explanation2);
    
    // console.log("assigned called");
}


function buttonBoolean1(){
    button1input = true;
}

function buttonBoolean2(){
    button2input = true;
}

function explanation1(){
    console.log("explaining");
    outline1 = true;
}

function explanation2(){
    console.log("explaining");
    outline2 = true;
}

function goMusic(){
    window.location.href = "music.html";
  }
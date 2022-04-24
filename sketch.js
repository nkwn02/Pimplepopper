let gameState = 'title';
let pstartImg;
let pplogo1Img;
let pplogo2IMG;
let eye1Img;
let eye2IMG;

let pimpleCount;

function preload() {
  pstartImg = loadImage('assets/startpimple.png');
  pplogo1Img = loadImage('assets/pplogo1.png');
  pplogo2Img = loadImage('assets/pplogo2.png');
  eye1Img = loadImage('assets/eye1.png');
  eye2Img = loadImage('assets/eye2.png');
}


function setup() {
  createCanvas(800, 400);

}

function draw() {
  background(204, 166, 106);


   switch (gameState) {

     case 'title':
       titleScreen();
       break;
     case 'play':
       playScreen();
       break;
     case 'gameover':
       endScreen();
       break;
   }
 }

function keyReleased() {
if (gameState === 'title' || gameState === 'gameover') {
  if (key === ' ' || key === ' ' ) {
    gameState = 'play';
  }
} else if (gameState === 'play') {
  if (key === ' ' || key === ' ' ){
  }
}
}

function titleScreen() {
background(214,157, 108);
stroke(192, 117, 89);
fill(167, 75, 41);
textSize(100);
textAlign(CENTER);
textSize(25);
text('Pop all the pimples before they CONSUME YOU', width*0.5, height*0.66);
fill(255);
textSize(25);
text('Press the space bar to start', width*0.5, height*.800);
//image(pstartImg, 375, 280);

image(pplogo1Img, 55, 45);
image(pplogo2Img, 440, 45);
}


function playScreen() {
background(214,157, 108);

//eyes
image(eye1Img, 55, 45);
image(eye2Img, 440, 45);

//mouth
fill(0);
ellipse(420, 300, 100, 10)


  if(frameCount%10 == 0) {


    var newSprite = createSprite(random(0, width), random(0, height));
    var rnd = floor(random(0, 4));

    if(rnd == 0)
      newSprite.addAnimation('img', 'assets/pimple1.png');
    if(rnd == 1)
      newSprite.addAnimation('img', 'assets/pimple2.png');
    if(rnd == 2)
      newSprite.addAnimation('img', 'assets/pimple3.png');
    if(rnd == 3)
      newSprite.addAnimation('img', 'assets/pimple4.png');



      pimpleCount++;


          //newSprite.life = 1000;
        }

        function mousePressed(){
          if (mouseX > 1 && mouseX < 800){
            if (mouseY > -1 && mouseY < 400) {
      pimpleCount--;
            }
          }
        }


      if (PimpleCount = 100) {
        gameState = 'gameover';
      }


    //newSprite.life = 1000;



  drawSprites();
}

  //this code is temporary cannot figure out how to link amount of sprites to gameover
    //if (mouseX > (width/2)-20 && mouseX < (width/2)+20) {
      //if (mouseY > (height/2)-20 && mouseY < (height/2)+20) {
        //gameState = 'gameover';
      //}
    //}

//pop pimple to start (test)
  //function mousePressed(){
    //if (mouseX > 1 && mouseX < 800){
      //if (mouseY > 1 && mouseY < 400) {
  //gameState = 'gameover';
    //}
 //}
//}

//}


function endScreen() {
  background(214,157, 108);
  stroke(192, 117, 89);
  fill(167, 75, 41);
  textSize(40);
  textAlign(CENTER);
  text('YOU WERE CONSUMED', width*0.5, height*0.33);
  textSize(20);
  fill(255);
  text('Press the space bar to try again', width*0.5, height*0.66);
}

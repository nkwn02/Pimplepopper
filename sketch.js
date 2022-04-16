let gameState = 'title';

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
background(204, 166, 106);
stroke(255);
fill(207, 14, 14);
textSize(100);
textAlign(CENTER);
text('Pimple Popper', width*0.5, height*0.33);
textSize(25);
text('Pop all the pimples before they CONSUME YOU', width*0.5, height*0.66);
fill(255);
textSize(25);
text('Press the space bar to start', width*0.5, height*.800);
}


function playScreen() {
background(204, 166, 106);

//face
fill(255);
ellipse(250, 150, 45, 45);
ellipse(650, 150, 45, 45);

fill(0);
ellipse(450, 300, 100, 10)


ellipse(250, 150, 35, 35);
ellipse(650, 150, 35, 35);
fill(255);
//end of face code

  if(frameCount%10 == 0) {


    var newSprite = createSprite(random(0, width), random(0, height));
    var rnd = floor(random(0, 4));

    if(rnd == 0)
      newSprite.addAnimation('img', 'assets/pimple.png');
    if(rnd == 1)
      newSprite.addAnimation('img', 'assets/pimple.png');
    if(rnd == 2)
      newSprite.addAnimation('img', 'assets/pimple.png');
    if(rnd == 3)
      newSprite.addAnimation('img', 'assets/pimple.png');


    //newSprite.life = 1000;
  }


  drawSprites();

//this code is temporary cannot figure out how to link amount of sprites to gameover
  if (mouseX > (width/2)-20 && mouseX < (width/2)+20) {
    if (mouseY > (height/2)-20 && mouseY < (height/2)+20) {
      gameState = 'gameover';
    }
  }

}


function endScreen() {
  background(204, 166, 106);
  stroke(255);
  fill(207, 14, 14);
  textSize(40);
  textAlign(CENTER);
  text('YOU WERE CONSUMED', width*0.5, height*0.33);
  textSize(20);
  text('Press the space bar to try again', width*0.5, height*0.66);
}

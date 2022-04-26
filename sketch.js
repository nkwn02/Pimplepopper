let gameState = 'title';
let pstartImg;
let pplogo1Img;
let pplogo2IMG;
let eye1Img;
let eye2IMG;

var newPimple;

let pimpleCount = 0;

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
    if (key === ' ' || key === ' ') {
      gameState = 'play';
    }
  } else if (gameState === 'play') {
    if (key === ' ' || key === ' ') {}
  }
}

function titleScreen() {
  background(214, 157, 108);
  stroke(192, 117, 89);
  fill(167, 75, 41);
  textSize(100);
  textAlign(CENTER);
  textSize(25);
  text('Pop all the pimples before they CONSUME YOU', width * 0.5, height * 0.66);
  fill(255);
  textSize(25);
  text('Press the space bar to start', width * 0.5, height * .800);
  //image(pstartImg, 375, 280);

  image(pplogo1Img, 55, 45);
  image(pplogo2Img, 440, 45);
}


function playScreen() {
  background(214, 157, 108);

  //eyes
  image(eye1Img, 55, 45);
  image(eye2Img, 440, 45);

  //mouth
  fill(0);
  ellipse(420, 300, 100, 10)


  if (frameCount % 10 == 0) {


    newPimple = createSprite(random(0, width), random(0, height));
    var rnd = floor(random(0, 4));

    if (rnd == 0)
      newPimple.addAnimation('img', 'assets/pimple1.png');
    if (rnd == 1)
      newPimple.addAnimation('img', 'assets/pimple2.png');
    if (rnd == 2)
      newPimple.addAnimation('img', 'assets/pimple3.png');
    if (rnd == 3)
      newPimple.addAnimation('img', 'assets/pimple4.png');



    pimpleCount++;
    console.log(pimpleCount);
  }
    for (var i = 0; i < allSprites.length; i++) {
      var mySprite = allSprites[i];
      if (mouseX > mySprite.position.x-30 && mouseX < mySprite.position.x+30) {
        if (mouseY > mySprite.position.y-30 && mouseY < mySprite.position.y+30) {
          mySprite.remove();
          pimpleCount--;
        }
    }



    //newSprite.life = 1000;
  }
  if (pimpleCount > 45) {
    gameState = 'gameover';
  }
  drawSprites();
}

  function mousePressed() {

    for (var i = 0; i < allSprites.length; i++) {

      if (mouseX > allSprites[i].position.x-30 && mouseX < allSprites[i].position.x+30) {
        if (mouseY > allSprites[i].position.y-30 && mouseY < allSprites[i].position.y+30) {
          allSprites[i].remove();
          pimpleCount--;
        }

        //sprites on the bottom will be drawn first
        //allSprites[i].depth = allSprites[i].position.y;

        //you can link the scale to the y position to simulate perspective
        //allSprites[i].scale = map(allSprites[i].position.y, 0, height, 0.2, 1);
      }

    }



  }

  //newSprite.life = 1000;





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
  background(214, 157, 108);
  stroke(192, 117, 89);
  fill(167, 75, 41);
  textSize(40);
  textAlign(CENTER);
  text('YOU WERE CONSUMED', width * 0.5, height * 0.33);
  textSize(20);
  fill(255);
  text('Press the space bar to try again', width * 0.5, height * 0.66);
}

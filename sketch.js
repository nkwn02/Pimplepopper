let gameState = 'title';
let pstartImg;
let pplogo1Img;
let pplogo2IMG;
let eye1Img;
let eye2IMG;

var newPimple;

let pimpleCount = 0;

var link;

function preload() {
  pstartImg = loadImage('assets/startpimple.png');
  pplogo1Img = loadImage('assets/pplogo1.png');
  pplogo2Img = loadImage('assets/pplogo2.png');
  eye1Img = loadImage('assets/eye1.png');
  eye2Img = loadImage('assets/eye2.png');
}


function setup() {
  createCanvas(800, 400);



  //link = createA('https://www.amazon.com/stores/CeraVe/CeraVe/page/0CA2A9B7-7695-43AF-98D9-FB55761E0796', 'CeraVe', '_blank');
//link.position(width * 0.5, height * 0.50);

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
      pimpleCount = 20;
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
    if (mouseX > mySprite.position.x - 30 && mouseX < mySprite.position.x + 30) {
      if (mouseY > mySprite.position.y - 30 && mouseY < mySprite.position.y + 30) {
        mySprite.remove();
        pimpleCount--;
      }
    }



    //newSprite.life = 1000;
  }
  if (pimpleCount > 40) {
    gameState = 'gameover';
  }
  drawSprites();
}

function mousePressed() {

  for (var i = 0; i < allSprites.length; i++) {

    if (mouseX > allSprites[i].position.x - 30 && mouseX < allSprites[i].position.x + 30) {
      if (mouseY > allSprites[i].position.y - 30 && mouseY < allSprites[i].position.y + 30) {
        allSprites[i].remove();
        pimpleCount--;
    }
    }
 }

}


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

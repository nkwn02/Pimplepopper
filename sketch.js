//Sprite drawing order
//new sprite are drawn on top of old ones
//click to sort the sprites depth according to their y coordinates

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(204, 166, 106);

  //every 10 frames
  if(frameCount%10 == 0) {

    //create a sprite in a random position
    var newSprite = createSprite(random(0, width), random(0, height));
    //assign a random appearance
    var rnd = floor(random(0, 4));

    if(rnd == 0)
      newSprite.addAnimation('img', 'assets/pimple.png');
    if(rnd == 1)
      newSprite.addAnimation('img', 'assets/pimple.png');
    if(rnd == 2)
      newSprite.addAnimation('img', 'assets/pimple.png');
    if(rnd == 3)
      newSprite.addAnimation('img', 'assets/pimple.png');

    //set a lifespan to avoid consuming all the memory
    newSprite.life = 1000;
  }

  //the newest sprites are drawn on the top
  drawSprites();

  face();
}


function face(){
  fill(255);
  ellipse(250, 150, 45, 45);
  ellipse(650, 150, 45, 45);

fill(0);
  ellipse(450, 300, 100, 10)


ellipse(250, 150, 35, 35);
ellipse(650, 150, 35, 35);

//fill(212, 15, 15)
//ellipse(random(0, width), random(0, height), 55, 55);

}

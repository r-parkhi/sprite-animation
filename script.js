//VARIABLES
//images
var trampoline, qBubble, aBubble;
//sprites
var pig, sheep, tram;

//PRELOAD IMAGES
function preload()
{
  trampoline = loadImage('assets/trampoline.png');
  qBubble = loadImage('assets/qBubble.png');
  aBubble = loadImage('assets/aBubble.png');
  sheep = loadImage('assets/sheep.png');
  pig = loadImage('assets/pig.png');
}
  
function setup() {
  createCanvas(500, 500);
  noStroke();
  world.gravity.y = 10;
  
  //SPRITES
  //trampoline
  tram = new Sprite(360, 410, 400, 200, 'static');
  tram.img = ('assets/trampoline.png');
  tram.scale = 0.5;
  //sheep
  sheep = new Sprite(360, 270, 250, 300);
  sheep.img = ('assets/sheep.png');
  sheep.scale = 0.45;
  sheep.bounciness = 0.1;
  //sheep movement
  if (sheep.y = 270)
  {
    sheep.rotation += 0.5;
  } 
  //pig
  pig = new Sprite(100, 360, 'static');
  pig.img = 'assets/pig.png';
  pig.scale = 0.3;
}

function draw() {
  //BACKGROUND
  background('#91d2e6');
  //grass
  fill('#1ea815');
  rect(0, 350, 500, 500);
  //trampoline shadow
  fill('#178510');
  ellipse(340, 425, 250, 55);
  
  //SPEECH BUBBLES
  fill('black');
  textAlign(CENTER);
  //pig speech
  image(qBubble, 50, 125, 150, 150);
  textSize(17);
  text('What do you call a sheep on a trampoline?', 80, 150, 100, 150);
  //sheep speech
  image(aBubble, 230, 20, 170, 170);
  textSize(26);
  text('A wooly jumper!', 265, 70, 100, 100);

  //BOUNCE WORKAROUND from p5play sprite page
  if (sheep.collided(tram))
  {
		sheep.vel.y = -4.8;
  }

  //PIG MOVEMENT
  if (pig.y = 360)
  {
    let r = random(100, 105);
    pig.x = r;
  }
}
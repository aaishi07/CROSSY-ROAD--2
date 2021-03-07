var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  player = new Player(width/2,height-25);
  
  
 
   
 }

function draw() {
  background("skyblue");
function keyPressesd(){
  if(keyCode==UP_ARROW){
    player.move(0,-2);
  }else if(keyCode== DOWN_ARROW){
    player.move(0,2);
  }else if(keyCode== LEFT_ARROW){
    player.move(-2,0);
  }else if(keyCode== RIGHT_ARROW){
    player.move(2,0);
  }
}
 translate(0,-player.spt.y+height-150);

  drawSprites();
}


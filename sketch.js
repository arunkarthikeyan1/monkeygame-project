
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas = (400,400);  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.X = ground.width/2;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  obstacle.debug = true
}


function draw() {
  
  background(255);
  
  stroke("black");
  textSize(20);
  fill("blue");
  text("score:"+score,200,100);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime:"+ survivalTime,100,50);
  
  banana();
  obstacle();
  
if (ground.x<0){
  ground.x = ground.width/2;
}
if (keyDown("space")&& monkey.y >= 100){
  monkey.velocityY = -12
}
  monkey.velocityY = monkey.velocityY + 0.8
  
   if(foodGroup.isTouching(monkey)){
     foodGroup.destroyEach();
     score = score+1;
   }
  
  monkey.collide(ground);
  monkey.collide(obstacleGroup);
  
  drawSprites();
}

function banana(){
if (frameCount % 60 === 0){
   var banana = createSprite(400,125,10,40);
   banana.addImage(bananaImage);
   banana.velocityX = -6
   banana.scale=0.1;
   foodGroup.add(banana);
 }
}

function obstacle(){
if (frameCount % 100 === 0){
   var obstacle = createSprite(400,325,10,40);
   obstacle.addImage(obstaceImage);
   obstacle.velocityX = -6
   obstacle.scale=0.2; 
   obstacleGroup.add(obstacle);
 }
}

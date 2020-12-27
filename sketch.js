
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
  
monkey = createSprite(100,300,20,15);
monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
monkey.scale = 0.1;

ground = createSprite(200,335,600,10);
ground.velocityX = -6;
ground.x = ground.width/2;

obstacleGroup = createGroup();
foodGroup = createGroup();
  
  
}


function draw() {
background("white");
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("Survival Time: " +survivalTime, 150,100);  


monkey.collide(ground);

if(ground.x<0){
ground.x = ground.width/2;  
}  
  
if(keyDown("space")&& monkey.y >= 200) {
monkey.velocityY = -10;
}
monkey.velocityY = monkey.velocityY + 0.8                              

if(obstacleGroup.isTouching(monkey)){  
obstacleGroup.setLifetimeEach(-1);
foodGroup.setLifetimeEach(-1);
  
ground.velocityX = 0; 
obstacleGroup.setVelocityXEach(0);
foodGroup.setVelocityXEach(0);
}  

spawnFood();  
spawnObstacle(); 

  
drawSprites(); 
}
function spawnFood() {
if (frameCount % 80 === 0) {

var banana = createSprite(600,120,40,10);
banana.y = Math.round(random(120,200));
banana.addImage(bananaImage);
banana.scale = 0.09;
banana.velocityX = -3;
    
banana.lifetime = 200;
banana.depth = monkey.depth;
monkey.depth = monkey.depth + 1;
foodGroup.add(banana);
    

  }
}
function spawnObstacle() {
if (frameCount % 300 === 0){
var obstacle = createSprite(600,165,10,40);
obstacle.y = Math.round(random(315,315)); 
obstacle.addImage(obstacleImage);
obstacle.velocityX = -6;
obstacle.scale = 0.2;
obstacle.lifetime = 200;
obstacleGroup.add(obstacle);   
}
}


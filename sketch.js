var fixedRect, movingRect;
var o1,o2;
var o3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(440,300,50,90);
  o1.shapeColor = "green";
  o2 = createSprite(200,390,50,90);
  o2.shapeColor= "green";
  o2.velocityX= 3;
  o3 = createSprite(1000,390,50,90);
  o3.shapeColor = "green";
  o3.velocityX= -3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,o1)){
  movingRect.shapeColor = "red";
  o1.shapeColor = "red";
  
}
else {
  movingRect.shapeColor = "green";
  o1.shapeColor = "green";
}
if( isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

bounceOff(o2,o3);
 // isTouching(movingRect,o2);
  drawSprites();
}

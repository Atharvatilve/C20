var fixedRect,movingRect;
var r1, r2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  r1= createSprite(500, 50, 50, 50);
  r2= createSprite(500, 350, 50, 50);
  r1.velocityY = 2;
  r2.velocityY = -2;

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
  &&  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  &&   fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}

if(r2.x-r1.x<r1.width/2+r2.width/2
  && r1.x-r2.x<r1.width/2+r2.width/2 ){
    r1.velocityX = r1.velocityX*(-1);
    r2.velocityX = r2.velocityX*(-1);

  }
  if(r2.y-r1.y<r1.height/2+r2.height/2
    && r1.y-r2.y<r1.height/2+r2.height/2 ){
      r1.velocityY = r1.velocityY*(-1);
      r2.velocityY = r2.velocityY*(-1);
  
    }
  drawSprites();
}

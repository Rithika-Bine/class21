var fixedRect, movingRect
function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green"

  fixedRect1 = createSprite(200, 200, 50, 50);
  fixedRect1.shapeColor = "green"

  fixedRect2 = createSprite(600, 200, 50, 50);
  fixedRect2.shapeColor = "green"

  movingRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor = "green"

  fixedRect1.velocityX=3
  fixedRect2.velocityX=-3
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isColliding(fixedRect,movingRect)) {
    
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }
  else if (isColliding(fixedRect1,movingRect)) {
    
    movingRect.shapeColor = "red"
    fixedRect1.shapeColor = "red"
  }
  else if (isColliding(fixedRect2,movingRect)) {
    
    movingRect.shapeColor = "red"
    fixedRect2.shapeColor = "red"
  }
  else {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
    fixedRect1.shapeColor = "green"
    fixedRect2.shapeColor = "green"
  }
  bounceBack(fixedRect1,fixedRect2)


  drawSprites();
}




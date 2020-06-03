 var ball, bimg, pimg, paddle;
function preload() {
  bimg = loadImage("ball.png");
  pimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage(bimg); 
  ball.velocityX=13
  paddle=createSprite(350,200,20,100);
  paddle.addImage(pimg);
 


}

function draw() {
  background(205,153,0);
   Random();
  edges=createEdgeSprites();
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(paddle);
  paddle.setCollider("rectangle", 0, 0, 20, 90);
  paddle.collide(edges);
 
  
  if(keyDown(UP_ARROW)){
    paddle.y=paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW)) {
    paddle.y=paddle.y + 20;
  }


  drawSprites();
 
}

function Random(){
  if(paddle.isTouching(ball)){
   ball.velocityY = random(-8, 8);
      }
}
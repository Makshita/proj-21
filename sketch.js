var bullet, wall; 
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,43)
  speed=random(55,90);
  weight=random(400,1500)
  bullet= createSprite(50, 200, 20, 5);
  wall= createSprite(1200, 200, thickness, height/2);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  bullet.shapeColor="white";
}

function draw() {
  background(0);  
  if (hascollided(bullet, wall)){
    bullet.velocityX=0
    
  }

  var damage =0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10){
wall.shapeColor="red";
}
  
if(damage<10){
  wall.shapeColor="green";
  }
drawSprites();
}

function hascollided(lbullet,lwall)
 { 
     bulletRightEdge=lbullet.x+lbullet.width;
     wallleftEdge=lwall.x;


if(bulletRightEdge>=wallleftEdge)
{
  return true

}
return false

}
  
 

var bullet,wall
var speed,weight
var thickness
function setup() {
  createCanvas(1600,400);
  speed=random(350,320)
  weight=random(30,50)
  thickness=random(22,83)


  bullet=createSprite(45,200,50,50)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="red"
  bullet.velocityX=speed; 
}

function draw() {
  background(255,255,255);
 if (hasCollided(bullet,wall)){
  
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
   if (damage>10){wall.shapeColor=color(255,0,0)}
   if (damage<10){wall.shapeColor=color(0,255,0)}}
 

  drawSprites();
  if(wall.x-bullet.x  < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      bullet.shapeColor=color(255,0,0)
    }
  
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      bullet.shapeColor=color(0,255,0)
    }
  
  }

}
function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x
{
  return true
}
return false;
}
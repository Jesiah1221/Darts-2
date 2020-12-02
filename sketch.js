var bullet, wall
var speed, weight;
var thickness;

function setup() {
  createCanvas(800,200)

  speed = random(223,391);
  weight = random(30,52)
  thickness = random(22,83)

  bullet = createSprite(400,100,30,5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(750,100, thickness,70);
  wall.shapeColor = 80,80,80;


}

function draw() {
  background(0,0,0);  

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed/(thickness *thickness *thickness);


     if(damage>10)
     {
         wall.shapeColor=color(255,0,0);
     }
      else if(damage<10)
     {
         wall.shapeColor=color(0,255,0);
     }

  
  }

  bullet.collide(wall);

  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
       return true
  }
   return false;
}
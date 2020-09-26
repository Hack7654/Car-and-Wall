var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600, 400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = ("pink");
  wall = createSprite(1500, 200, 60, height / 2);
  speed = random(55, 90);
  car.velocityX = speed;
  weight = random(400, 1500);
}

function draw() {
  background(0, 0, 0);
  drawSprites();


  if (car.collide(wall)) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;
    if (deformation > 180) {
      car.shapeColor=color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
}
var raindrops;
var raindropCount = 1000;


function setup() {
  createCanvas(800,400);

  for (var h = 0; h < raindropCount; h++){
  	raindrops[h] = new Raindrop();
  }

 
}

function draw() {
  background(0); 
  fill("red") 
  text("The Raindrop game",400,20);
  textSize(100);
  drawSprites();
  for(var h = 0; h < raindrops.height; h++)
 
raindrops[i].display();
raindrops[i].fall();
  
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//defining global variables
var helicopter, helicopterIMG;
var package, packageIMG;
var packageBody,ground;

function preload() {
	//preloading images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	//changing the position mode of the rectangle
	rectMode(CENTER);
	
	//creating the package sprite
	package = createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG);
	package.scale = 0.2;

	//creating the helicopter sprite
	helicopter = createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale = 0.5;

	//creating the gound sprite
	ground = createSprite(width/2, height-35, width,10);
	ground.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6 , isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  drawSprites();
 
}
 
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}




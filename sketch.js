
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dusbinImage;

function preload()
{
	dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground=new Ground(400,680,800,20)


	
	dustbin1 = new Dustbin(500,600,20,100)
	dustbin2 = new Dustbin(700,600,20,100)
	dustbin3 = new Dustbin(600,650,200,20)  

	paper=new Paper(100,300,70)
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ground.display()
	
  
	dustbin1.display()
  dustbin2.display()
  dustbin3.display()
paper.display()

image(dustbinImage,450,500,300,200)


  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:750,y:-750})
	}

	
}


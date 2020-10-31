
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,695,800,10)
	ball = new Ball (100,650,10)

	 dustbin1 = new Dustbin (500,640,10,100)
	 dustbin2 = new Dustbin (700,640,10,100)
	 dustbin3 = new Dustbin (600,685,190,10)






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:12,y:-14})
	}
}




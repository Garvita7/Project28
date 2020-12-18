
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree1,boy1,mango1,mango2,mango3,mango4,slingShot,stone1;

function preload(){

	boy1 = loadImage("boy.png");
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(250,450,500,20);
	tree1 = new Tree(400,280,200,350);
	mango1 = new mango(400,200);
	mango2 = new mango(430,210);
	mango3 = new mango(450,250);
	mango4 = new mango(480,230);
	stone1 = new stone(10,350);
	slingShot = new launcher(stone1.body,{x:10,y:350});





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);

  ground.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  slingShot.display();
  image(boy1,50,400,100,200);
  stone1.display();
  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);

  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
function detectCollision(stone,mango){
	mango.body.position = mango.body.position;
	stone.body.position = stone.body.position;

	var distance = dist(stone.body.position.x , stone.body.position.y, mango.body.position.x , mango.body.position.y)
	if(distance<= mango.radius + stone.radius){
		Matter.Body.setStatic(mango.body,false);
	}

}




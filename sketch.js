
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload()
{
	
}

function setup() {
  createCanvas(1200, 570);
  
	engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(1000,100,50,50); 
  box2 = new Box(975,150,50,50);
  box3 = new Box(1025,150,50,50);
  box4 = new Box(950,200,50,50);
  box5 = new Box(1000,200,50,50);
  box6 = new Box(1050,200,50,50);
  ground1 = new Ground(1000,245,200,20);
  box7 = new Box(700,280,50,50);
  box8 = new Box(675,330,50,50);
  box9 = new Box(725,330,50,50);
  box10 = new Box(700,380,50,50);
  box11 = new Box(650,380,50,50);
  box12 = new Box(750,380,50,50);
  ground2 = new Ground(700,420,200,20)
  attacker = new Polygon(150,420,80,80)
  sling= new SlingShot(attacker.body,{x:150,y:420})

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ground1.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  ground2.display();
  attacker.display();
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(attacker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;

function preload()
{
  
}

function setup() {
 createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof(450,100,300,30);
  bob1 = new Bob(350,400,50)
  bob2 = new Bob(400,400,50)
  bob3 = new Bob(450,400,50)
  bob4 = new Bob(500,400,50)
  bob5 = new Bob(550,400,50)
  chain1 = new Chain(bob1.body,roof.body,-100,0)
  chain2 = new Chain(bob2.body,roof.body,-50,0)
  chain3 = new Chain(bob3.body,roof.body,0,0)
  chain4 = new Chain(bob4.body,roof.body,50,0)
  chain5 = new Chain(bob5.body,roof.body,100,0)
  

  

  Engine.run(engine);
  
  
}

function draw() {
  rectMode(CENTER);
  background("pink");

  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  roof.display();
  
 
}

function keyPressed(){
  if(keyDown(UP_ARROW)){
  Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-15})
  }
}

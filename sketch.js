
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine 
let world

var plane;
var block1;
var block2;
var rotator1;
var rotator2;
var rotator3;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;
var particle1;
var particle2;
var particle3;
var particle4;
var particle5;


//function preload()
//{
	
//}

function setup() {
	createCanvas(500, 600);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var particle_options = {
		restitution:0.4,
		friction:0.2
	}

	var plane_options = {
		isStatic: true
	}
	
	fill("brown")
	plane = Bodies.rectangle(250,595,400,20,plane_options)
	World.add(world,plane)

	block1 = Bodies.rectangle(125,350,10,10,plane_options)
    World.add(world,block1)

	block2 = Bodies.rectangle(375,350,10,10,plane_options)
    World.add(world,block2)

    rotator1 = Bodies.rectangle(250,200,150,20,plane_options)
	World.add(world,rotator1)

	rotator2 = Bodies.rectangle(250,200,150,20,plane_options)
	World.add(world,rotator1)

	rotator3 = Bodies.rectangle(250,200,150,20,plane_options)
	World.add(world,rotator1)

	particle1 = Bodies.circle(220,10,10,particle_options)
	World.add(world,particle1)

	particle2 = Bodies.circle(220,10,10,particle_options)
	World.add(world,particle2)

	particle3 = Bodies.circle(220,10,10,particle_options)
	World.add(world,particle3)

	particle4 = Bodies.circle(220,10,10,particle_options)
	World.add(world,particle4)

	particle5 = Bodies.circle(220,10,10,particle_options)
	World.add(world,particle5)

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS)
	
}


function draw() {

	background("lightGreen")
	Engine.update(engine)
    
	ellipse(particle1.position.x,particle1.position.y,10)
	ellipse(particle2.position.x,particle2.position.y,10)
	ellipse(particle3.position.x,particle3.position.y,10)
	ellipse(particle4.position.x,particle4.position.y,10)
	ellipse(particle5.position.x,particle5.position.y,10)

	rect(plane.position.x,plane.position.y,500,10)
	rect(block1.position.x,block1.position.y,125,15)
	rect(block2.position.x,block2.position.y,125,15)
	
	Matter.Body.rotate(rotator1,angle1)
	push();
	translate(rotator1.position.x,rotator1.position.y)
	rotate(angle1)
	rect(0,0,150,20)
	pop();
	angle1 = angle1 + 14

	Matter.Body.rotate(rotator2,angle2)
	push();
	translate(rotator2.position.x,rotator2.position.y)
	rotate(angle2)
	rect(0,0,150,20)
	pop();
	angle2 = angle2 + 16

	Matter.Body.rotate(rotator3,angle3)
	push();
	translate(rotator3.position.x,rotator3.position.y)
	rotate(angle3)
	rect(0,0,150,20)
	pop();
	angle3 = angle3 + 18

}



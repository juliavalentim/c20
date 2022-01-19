
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var circulo,quadrado,retangulo;
var ground;
var angle= 60;
var poly;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  	world = engine.world;

  var ground_options = {
	isStatic: true
 }
  
   var circulo_options = {
    restitution: 0.95,
    frictionAir:0.01
 }
   var quadrado_options = {
	restituiton: 0.7
 }
  var retangulo_options = {
    restitution: 0.5

 }

	//Crie os Corpos Aqui.

	ground = Bodies.rectangle(200,390,400,20,ground_options);
	World.add(world,ground);

	quadrado = bodies.quadrado(120,10,10,quadrado_options)
	world.add(world,quadrado)
  
	circulo = Bodies.circle(100,10,20,circulo_options)
	World.add(world,circulo);
  
	retangulo = Bodies.rectangle(80,10,40,retangulo_options)
	World.add(world,retangulo)

	rectMode(CENTER);
	ellipseMode(RADIUS)
}


function draw() {
  background(0);
  
  ellipse(circulo.position.x,circulo.position.y,20);
  fill("yellow")
  ellipse(retangulo.position.x,retangulo.position.y,40,40)
  fill("red")
  ellipse(quadrado.position.x,quadrado.position.y,60,60)
  fill("blue")
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
 
}




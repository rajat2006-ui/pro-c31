const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles=[];
var divisions=[];
var plinkoes=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(240,780,480,40);

  for(var i=0;i<=480;i=i+80){
    divisions.push(new Divider(i,660));
  }

  for(var r=100;r<=500;r=r+100){

    for(var i=random(15,35);i<=470;i=i+50){
    plinkoes.push(new Plinko(i,r))
   }

  }

}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  
  ground.display();

  for(var i=0;i<plinkoes.length;i++){
    plinkoes[i].display();
  }

  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(150,330),10))
  }

  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
 
}
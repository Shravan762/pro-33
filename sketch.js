const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


 var bg= "snow3.jpg"  
 var snow 
 var backgroundImg    
           
  function preload(){
    getBackgroundImg()
  }

   function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  snow = new Snow(800,50)
}

function draw() {

  if(backgroundImg)
        background(backgroundImg);
        
        snow.display()
        
  drawSprites();
}
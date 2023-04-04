var bg,back
var doggo, doggoImage


function preload(){

  doggoImage=loadAnimation("gs1.png","gs2.png","gs3.png","gs4.png");
  bg=loadImage("park_2.jpeg")

}


function setup(){

createCanvas(1200,500)
back=createSprite(500,300)
back.addImage(bg)
back.scale=1.3
doggo=createSprite(140,500,20,20)
doggo.addAnimation("running",doggoImage)
doggo.scale=0.8
}

function draw(){

background(0)


drawSprites()
}
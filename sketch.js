var cat, mouse;
var catImage, mouseImage;
var catRunning, catLastImage;
var mouseCheese, mouseStanding, mouseFunny;
var mouseGlass;
var garden, gardenImage;

function preload() {
    //load the images here
    catImage.loadImage("cat1.png");
    catRunning.loadImage("cat2.png");
    catLastImage.loadImage("cat3.png");
    mouseCheese.loadImage("mouse1.png");
    mouseStanding.loadImage("mouse2.png");
    mouseFunny.loadImage("mouse3.png");
    mouseGlass.loadImage("mouse4.png");
    gardenImage.loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create garden
    garden = createSprite(0,0,1000,800)
    garden.addImage(gardenImage);
   
    //create tom and jerry sprites here
    cat = createSprite(950,700,10,10);
    cat.addImage(catImage);
    mouse =  createSprite(100,700,10,10);
    mouse.addImage(mouseCheese);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x < (cat.width + mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLast",catLastImage);
    cat.changeAnimation("catLast");
  }
    keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyCode === LEFT_Arrow){
    cat.velocityX = -5
    cat.addAnimation("catRun",catRunning)
    cat.changeAnimation("catRun")
}

}

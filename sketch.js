//Create variables here
var dogImg , happyDogImg ,dog , database , foodS , foodstock ;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
    //database
    database = firebase.database();
    foodStock = database.ref('Food');
    foodStock.on("value",readStock);
  
  //sprites and their animation
  dog = createSprite(200,200,1900,100);
  dog.addImage(dogImg,200,200);
  dog.scale = 0.5;
}


function draw() {  
  background(46,139,87);

  
  //food
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg,200,200);
  }
  drawSprites();

  //add styles here
  textSize(20);
  fill("white");
  text("Note: Press UP_ARROW to feed drago Milk");
}

// function to read values from DB
function readStock(data){
  foodS = data.val();
}

//function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}


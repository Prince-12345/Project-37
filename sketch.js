var dog, dogImg, dogImg2, bgImg;
var database;
var foodd, foodS, foodStock;
var stock = 20;
var feedbutton,addfoodbutton;
var namee;
function preload(){

  bgImg = loadImage("Ground.jpg");
  dogImg = loadImage("dogImg.png");
  dogImg2 = loadImage("dogImg1.png");
  
}



function setup() {

  createCanvas(1000, 500);

  database=firebase.database();

  dog = createSprite(800,340,50,50);
  dog.addImage(dogImg);
  dog.scale=0.2;

  foodd = new Food();
  
  foodStock = database.ref("Food");
  foodStock.on("value",readStock,console.log("error"));

nameref=database.ref("name");
nameref.on("value", function(data){
namee =data.val();
})

feedbutton = createButton("Feed The Dog Milk");
feedbutton.position(200,100);
feedbutton.mousePressed(feedDog);

addfoodbutton = createButton("Add milk bottles to the stock");
addfoodbutton.position(170,140);
addfoodbutton.mousePressed(addFood);

  input=createInput();
  input.position(540,140);
  
  
  button=createButton("SUBMIT");
  button.position(670,140);
  button.mousePressed(renameDog);
  
}






function draw() {  

  background(bgImg);

  foodd.display();
 

  drawSprites();
  textSize(15);
  strokeWeight(3);
  fill("red");
  textFont("TimeS new Roman");
  text("Your Pet Dog a Name--",385,80);
  if(namee){
  text("Hello "+ namee,430,140);}
  stroke("yellow");
  textSize(45);
  textFont("Chiller");
text("Remaining Food Stock = "+ foodS+".",290,40);
textSize(25);
strokeWeight(5);
fill("YELLOW")
textFont("TIMES NEW ");
stroke("RED");
text("Note : This is version 2.0 of Virtual Pet ! ",10,200);

}




function readStock(data){

  foodS = data.val();
  foodd.updateFoodStock(foodS);
  console.log(foodS);

}

function ShowError(){

console.warn("Error is There in fetching Data")
}

function feedDog(){
if(foodS>0){
  dog.addImage(dogImg2);
  foodd.x =300;
  foodd.updateFoodStock(foodd.getFoodStock()-1);
  database.ref('/').update({
    Food:foodd.getFoodStock()
  })
}else{
  dog.addImage(dogImg);
}
}

function addFood(){
  dog.addImage(dogImg);
  if(foodS>-1 && foodS<20){
    foodd.updateFoodStock(foodd.getFoodStock()+1);
    database.ref('/').update({
      Food:foodd.getFoodStock()
    })
  }
  }

  function renameDog(){
  
     Name=input.value();
     button.hide();
     input.hide();
database.ref('/').update({
  name:Name
})

  }

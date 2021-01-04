class Food{

constructor(){

    this.image = loadImage("Milk.png");
    this.foodStock = 20;
    this.lastfed=0;
}
updateFoodStock(foodStock){
   this.foodStock=foodStock;

  }

getFoodStock(){
   return this.foodStock;
}

getFedTime(lastFed){
   this.lastFed=lastFed;
 }

deductFood(){
if(this.foodStock>0){
   this.foodStock=this.foodStock-1;
}

}
display(){
var x = 40;
var y = 310;

imageMode(CENTER);
if(this.foodStock!=0){

 for(var i =0; i<this.foodStock; i++){
    
    if(i%10===0){
       x=40;
       y=y+50;
     }
     image(this.image,x,y,50,50);
     x = x+40;
     }

  }

  }

}



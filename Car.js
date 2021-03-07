class Car{
   constructor(speed){
        this.x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
        this.y = height-random([150,250,350,950,1050,1150,1750,1850,1950]);
        this.spt = createSprite(this.x,this.y);
        this.spt.shapeColor = "blue";
        this.spt.scale=0.5;

        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
            speed=-speed;
        }
        this.spt.velocityX = speed;
    }
for(var i=0;1<6;1++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)
    {
    var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
    road.shapeColor="black";
    }
    bottomGrass1.shapeColor = "grey";
}
for(var i = 0; i < 40; i++){
    cars = new Car(2);
    carGroup1.add(cars.spt);
}
for(i=1;i<carGroup1.length;1++){
    if(carGroup1[1].x<0)
    {
        carGroup[i].x=width;
    }
}
}



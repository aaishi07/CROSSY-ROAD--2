class Log{
    constructor(speed){
        this.x = random([100,300,500,700,900]);
        this.y = height-random([550,650,750,1350,1450,1550]);
        this.width = 1500;
        this.height = 800;
        this.speed = speed;
        this.spt = createSprite(this.x,this.y,this.width,this.height);
        this.spt.velocityX = this.speed;
        this.spt.shapeColor = "brown";
        this.spt.scale=0.1;
        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
            speed=-speed;
        }
        this.spt.velocityX = -speed;
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
    logs = new Log(2);
    logGroup1.add(logs.spt);
}
   for(i=1;i<logGroup1.length;1++){
       if(logGroup1[1].x<0)
       {
           logGroup[i].x=width;
       }
   }
}

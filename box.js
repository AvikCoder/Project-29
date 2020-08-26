class Box {
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
     var pos = this.body.position;
     rectMode(CENTER);
     fill(random(1,600),random(1,600),random(1,600));
     rect(pos.x,pos.y,this.width,this.height);  
    }
}
class stone{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
         }
        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;
        this.image = loadImage("stone.png")
        World.add(world,this.body);
    }    

    display(){
        var pos = this.body.position;
        fill("blue")
        imageMode(RADIUS);
        image(this.image,pos.x, pos.y, 30, 30);
    }


    }
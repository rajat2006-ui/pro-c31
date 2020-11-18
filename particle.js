class Particle{
    constructor(x,y){
        this.body=Bodies.circle(x,y,10)
        this.colour=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill(this.colour)
        ellipse(pos.x,pos.y,10);
    }
}
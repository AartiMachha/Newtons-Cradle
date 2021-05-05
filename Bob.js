class Bob{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            restituion:1,
            friction:0,
            density:0.8
        }
        this.x=x;
        this.y=y;
        this.r=radius;
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        

        World.add(world, this.body)
    }
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(rgb(6, 253, 199));
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}

class Umbrella {

    constructor(x,y) {
    
        this.body = Bodies.circle(x,y,137,{isStatic:true, 'restitution':0.8, 'friction':0.6})
        this.image = loadImage("Walking Frame/walking_1.png");
        //Matter.this.image.scale(0.5);

        World.add(world,this.body)
    }

    display() {

        var pos = this.body.position;

        rectMode(CENTER)
        //fill("black")
        //ellipse(pos.x, pos.y, 265, 265)
        image(this.image, 100, 275, 550, 550)
    }
}
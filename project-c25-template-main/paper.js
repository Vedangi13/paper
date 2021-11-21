class paper{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:.3,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r

        this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,this.r-20/2,option)
        World.add(world,this.body);
    }
    display(){
        var paus=this.body.position
        push ()
        translate (paus.x,paus.y)
        rectMode(CENTER)
        imageMode(CENTER)
        image (this.image,0,0,this.r)
        pop ()
    }
    
}
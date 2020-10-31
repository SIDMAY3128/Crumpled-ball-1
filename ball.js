class Ball {
    constructor(x,y,radius){
        this.radius = radius

        var options = {
            restitution:0.5,
            density:1
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
    }
    display(){
        fill ("grey")
        circle(this.body.position.x,this.body.position.y,this.radius*2)
    }
    
}
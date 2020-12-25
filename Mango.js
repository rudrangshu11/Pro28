class Mango {
    constructor(x, y,){
        var mangoOptions = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x, y, 30, mangoOptions);
        this.radius = 30;
        this.image = loadImage("pic/mango.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 60, 60);
    }
}
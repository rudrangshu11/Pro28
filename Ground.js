class Ground {
    constructor(){
        this.body = Bodies.rectangle(500, 600, 1000, 20);
        World.add(world, this.body);
    }
    display(){
        stroke('lime')
        fill('lime')
        rectMode(CENTER)
        rect(500, 600, 1000, 20)
    }
}
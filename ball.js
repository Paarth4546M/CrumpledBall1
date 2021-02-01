class Ball{
constructor(x,y,radius){
var options={
    isstatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body = Bodies.circle(x, y, radius, options);
this.radius = radius
World.add(world, this.body);
}
display(){
    ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
}

}

/*

---creation---
1. var
2. options
3. var = Bodies. somthing..
4. World.add


---displaying--
shapeMode (so it is aligned in center)
shape()


*/

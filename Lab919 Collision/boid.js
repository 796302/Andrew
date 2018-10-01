function Boid(loc, vel, col){
  this.loc = loc;
  this.vel = vel;
  this.col = col;
  this.acc = createVector(0, 0.5);

  this.run = function (){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function(){
    if(this !== chaser){
      var d = this.loc.dist(chaser.loc);

      if(d < 200){
        var steeringForce = p5.Vector.sub(this.loc, chaser.loc);
        steeringForce.normalize();
        steeringForce.mult(.1);
        this.vel.add(steeringForce);
      }

      this.loc.add(this.vel);

    }

 }
    this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.render = function(){
    push()
    fill(this.col);
    translate(this.loc.x,this.loc.y)
    rotate(this.vel.heading() + radians(90));
    triangle(-5, 0, 5, 0, 0, -15);
    pop()
  }
}//  end of constructor

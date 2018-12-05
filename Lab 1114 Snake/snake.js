function Snake(loc, vel, col, numSeg){

  this.loc = loc;
  this.vel = vel;
  this.col = color;
  this.numSeg = numSeg;
  this.segments = [];
  this.segments.push(createVector(0, 0));

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    for(var i = 0; i < this.segments.length; i++){
    this.segments[i].x = this.loc.x;
    this.segments[i].y = this.loc.y;
/*    if(i > 1){
      this.segments[i + 1].x = this.segments[i].x;
      this.segments[i + 1].y = this.segments[i].y;
    }
*/  }
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, 800-20)
    this.loc.y = constrain(this.loc.y, 0, 800-20)
  }

  this.render = function(){
    for(var i = 0; i < this.numSeg; i++){
      noStroke();
      fill(0, 255, 0);
      this.segments.push(createVector(this.segments[i].x, this.segments[i].y));
      rect(this.segments[i].x, this.segments[i].y, 20, 20)

    }
    noStroke();
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.y, 20, 20);
  }

}

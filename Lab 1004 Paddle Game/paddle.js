function Paddle(location, col){
    this.loc = location;
    this.col = col;
    this.ht = 30;
    this.wid = 80;
    this.run = function(){
      this.update();
      this.render();
    }

  // This function calls other functions

  // This function changes the location of the ball
  // by adding speed to x and y
   this.update = function(){
this.loc.x = mouseX
//var mouseLoc = createVector(mouseX, mouseY)
//this.loc = p5.Vector.lerp(this.loc, mouseLoc, .5)
   }

   //checkEdges() reverses speed when the ball touches an edge
   this.checkEdges = function(){
         if(this.loc.x < 0) this.vel.x = -this.vel.x;
         if(this.loc.x > width) this.vel.x = -this.vel.x;
         if(this.loc.y < 0) this.vel.y = -this.vel.y;
         if(this.loc.y > height) this.vel.y = -this.vel.y;
      }
    // render() draws the ball at the new location
   this.render = function(){
      fill(this.col);
      rect(this.loc.x, this.loc.y, this.wid, this.ht);
   }
}

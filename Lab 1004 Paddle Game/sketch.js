//Global variable
var paddle;
var Balls = [];
function setup(){
//canvas
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(12);
//rectangle code - vvvvvvvvvvvvvvvvvvvvvvv
//var loc = createVector(random(width), random(height));
//var vel = createVector(random(-5,5), random(-5,5));
//var col = color(random(0, 255), 0, 0)
//paddle = new rectangle(loc, vel, col)
}
//create Balls
function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
      var loc = createVector(random(width), random(0,200));
      var vel = createVector(random(-3,3), random(-3,3));
      var rad = random(20,40);
      var col = color(255, 255, 255);
      var b = new Ball(loc, vel, rad, col);
      Balls.push(b);

}

}

function draw(){
//  paddle.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run();
//splice balls
//    var x = Balls[i]
//    var y = chaser.loc;
//    var z = x.loc;
//    var dist = y.dist(z);
//    if(dist <= 25){
//      Balls.splice(i , 1)
//    }
  }


}

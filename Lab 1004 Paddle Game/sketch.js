//  Global variables
var balls = [];
var paddle;

// seting up project
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(random(20,250), random(20,250), random(20,250)); // draws canvas
  loadBalls(50);  // loads balls
  loadpaddle();

}
//
function draw() {
  background(0,0,0,);
  paddle.run();
  for(var i = 0; i < balls.length; i = i + 1){
    balls[i].run()
  }
  checkCollision();
}
  //splice boid
  function checkCollision(){
  for (var i = 0; i < balls.length; i++){

    if(balls[i].loc.x > (paddle.loc.x) &&
    balls[i].loc.x < (paddle.loc.x + paddle.wid) &&
    balls[i].loc.y > (paddle.loc.y) &&
    balls[i].loc.y < (paddle.loc.y + paddle.ht)){
    balls.splice(i , 1)
  }
 }

}
if(balls[i].loc.x > (paddle.loc.x) &&
balls[i].loc.x < (paddle.loc.x + paddle.wid) &&
balls[i].loc.y > (paddle.loc.y) &&
balls[i].loc.y < (paddle.loc.y + paddle.ht) &&
(vel > 0)){
  balls = [];
  loadBall(20);
  balls.run
}
//loading the balls
function loadBalls(numBalls){
//creating the balls
    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(50, 100));
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = random(30,30);
        var col = color(random(255), random(255), random(255));
        var b = new Ball(loc, vel, radius, col);
        balls.push(b);

    }
    console.log(balls);
}
function loadpaddle() {
  var loc = createVector(random(width), 400);
  var col = color(255, 255, 255);
  paddle = new Paddle(loc, col);

}

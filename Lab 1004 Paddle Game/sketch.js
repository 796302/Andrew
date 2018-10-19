//  Global variables
var balls = [];
var paddle;
var score = 0;
// loadballs/create canvas
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(random(20,250), random(20,250), random(20,250)); // draws canvas
  loadBalls(30);  // loads balls
  loadpaddle();

}

function draw() {
  background(0, 0, 0);
  //run paddle
  paddle.run();
  for(var i = 0; i < balls.length; i = i + 1){
    balls[i].run()
  }
  //score
  textSize(32);
  fill(255, 255, 255);
  text(score, 50, 50);
//run splice Balls
  checkCollision();
}
  //splice balls
  function checkCollision(){
  for (var i = 0; i < balls.length; i++){

    if(balls[i].loc.x > (paddle.loc.x) &&
    balls[i].loc.x < (paddle.loc.x + paddle.wid) &&
    balls[i].loc.y > (paddle.loc.y) &&
    balls[i].loc.y < (paddle.loc.y + paddle.ht) && balls[i].vel.y > 0){
    balls.splice(i , 1)
  // increase score when splicing a ball
    score = score + 1
  }
  //reset game if hit bottom of paddle
  else {
    if(balls[i].loc.x > (paddle.loc.x) &&
    balls[i].loc.x < (paddle.loc.x + paddle.wid) &&
    balls[i].loc.y > (paddle.loc.y) &&
    balls[i].loc.y < (paddle.loc.y + paddle.ht) &&
    balls[i].vel.y < 0){
      var numBalls = balls.length + 50;
      balls = [];
      loadBalls(numBalls);
      for(var i = 0; i < balls.length; i++){
      balls[i].run
    }
    }
  }
  //win condition
  if(score > 49){
    fill(random(0,255), random(0,255), random(0,255));
    text("You Win!", 400, 400);
  }
 }


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
//paddle function
function loadpaddle() {
  var loc = createVector(random(400), 400);
  var col = color(255, 255, 255);
  paddle = new Paddle(loc, col);

}

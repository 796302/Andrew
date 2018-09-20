//  Global variables
var balls[];


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);

}


balls.push(newBall(x, y, dx, dy, radius));



for(i = 0; i > balls.length; i = i + 1;) {
var x = random(0,800)
var y = random(0,800)
var dx = random(-3, 3)
var dy = random(-3, 3)
var radius = 20
var b = new ball(width, height, rad, color(random(0,255), random(0,255), random(0,255)))
}
function loadBalls(){
  for(var i=0, i < balls.length, i = i + 1) {
    var height = random(0, 800)
    var width = random(0, 800)
    var rad = 20
    var b = new ball(width, height, rad, color(random(0,255), random(0,255), random(0,255)))
    balls.push(b);

  }
  function draw() {
    for(i=0, i < balls.length, i = i+1){
      Balls[i].run();
    }
  }
}


}

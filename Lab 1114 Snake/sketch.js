var snake = [];
//snake bodies
var squares = [];
//movement for snake
var numberOfSquares = 40;
var squareSize;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0); // draws canvas
  squareSize = width/numberOfSquares
  loadSquares(20);

for(var i = 0; i < squares.length; i++){
  squares[i].render();
  }
}

function loadSquares(){
  //  checkerboard for movement of snakes
var rowNum = 0;
//row for movement of snakes
var colNum = 0;
//column for movement of snakes
//creates the amount of pixels the snake can move vvvvvv
for(var row = 0; row < 40; row++) {
  var x = 20*row
  for(var col = 0; col < 40; col++) {
    var y = 20*col
    var loc = createVector(x, y);
    var c;
    if((row + col) % 2){
      c = color(255, 255, 255);
//keeps white background
    }
    else {
      c = color(255, 255, 255);
    }
    var s = new Sqr(loc, 100, c);
    squares.push(s);

    }
  }
}

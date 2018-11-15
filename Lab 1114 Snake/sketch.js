var snake;
var squares = [];
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
  //  create a square object and push it into the squares array
var rowNum = 0;
var colNum = 0;

for(var row = 0; row < 40; row++) {
  var x = 20*row
  for(var col = 0; col < 40; col++) {
    var y = 20*col
    var loc = createVector(x, y);
    var c;
    if((row + col) % 2){
      c = color(0, 0, 0);
    }
    else {
      c = color(255, 255, 255);
    }
    var s = new Sqr(loc, 100, c);
    squares.push(s);

    }
  }
}

//global variable

var squares = [];
var numberOfSquares = 100;
var squareSize;
function setup() {
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
squareSize = width/numberOfSquares
loadSquares(100)

for(var i = 0; i < squares.length; i++){
  squares[i].render();
  }
}

function loadSquares(){
var rowNum = 0;
var colNum = 0;

for(var row = 0; row < numberOfSquares; row++) {
  var x = 8*row
  for(var col = 0; col < 2; col++) {
    var y = 100*col
    var loc = createVector(x, y);
    var c;
    if((row + col) % 2){
      c = color(random(0,255), random(0,255),random(0,255));

    }
    else {
      c = color(random(0,255), random(0,255),random(0,255));
    }
    var s = new Sqr(loc, 100, c);
    squares.push(s);

    }
  }
}

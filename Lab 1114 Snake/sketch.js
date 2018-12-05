var w = 20;
var snake;
var food = [];
var numSeg = 1;


function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position(windowWidth-width)/(2, 30);
  background(20, 20, 20);
  loadSnake();
  loadFood(1);

  frameRate(20);
}

function draw(){
  background(20, 20, 20, 6000);

  snake.run();

for(var i = 0; i < food.length; i = i + 1){
  food[i].run();
}
  checkLoc();
}
function checkLoc(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      food.splice(i, 1);
      loadFood(1);
      snake.numSeg = snake.numSeg + 1;

    }
  }
}


function keyPressed(){
  //up
  if(keyCode === 38){
    snake.vel = createVector(0, -20);


  }
  //down
  if(keyCode === 40){
    snake.vel = createVector(0, 20);

  }
  //right
  if(keyCode === 39){
    snake.vel = createVector(20, 0);

  }
  //left
  if(keyCode === 37){
    snake.vel = createVector(-20, 0);

  }
}
function loadSnake(){
    var loc = createVector(width /2, height/2);
    var vel = createVector(0, 0);
    var col = color(0, 255, 0);
    snake = new Snake(loc, vel, col, numSeg);

  }




function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var min = 1;
   //40 * 20 = 800
   var max = 39;
   var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
   var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var vel = createVector(0, 0);
    var col = color(0, 255, 0);
    var f = new Food(loc, vel, col);
    food.push(f);
  }
}

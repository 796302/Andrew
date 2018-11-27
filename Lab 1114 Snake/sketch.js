var w = 20;
var cols, rows;
var snake = [];
var food = [];
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position(windowWidth-width)/(2, 30);
  background(20, 20, 20);
  loadSnake(1);
  loadFood(1);

  frameRate(15);
}

function draw(){
  background(20, 20, 20, 6000);
  for(var i = 0; i < snake.length; i = i + 1){
  snake[i].run();
}
for(var i = 0; i < food.length; i = i + 1){
  food[i].run();
}
  checkCollision();
}
function checkCollision(){
for(var i = 0; i < food.length; i++){

if(food[i].loc.x > (snake.loc.x) &&
food[i].loc.x < (snake.loc.x + snake.width) &&
food[i].loc.y > (snake.loc.y) &&
food[i].loc.y < (snake.loc.y + snake.height)){
food.splice(i , 1)

}
}
}



function keyPressed(){
  //up
  if(keyCode === 38){
    snake[0].vel = createVector(0, -20);


  }
  //down
  if(keyCode === 40){
    snake[0].vel = createVector(0, 20);

  }
  //right
  if(keyCode === 39){
    snake[0].vel = createVector(20, 0);

  }
  //left
  if(keyCode === 37){
    snake[0].vel = createVector(-20, 0);

  }
}
function loadSnake(numSnake){
  for(var i = 0; i < numSnake; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(0, 0);
    var col = color(0, 255, 0);
    var s = new Snake(loc, vel, col);
    snake.push(s);
  }
}
function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(0, 0);
    var col = color(0, 255, 0);
    var f = new Food(loc, vel, col);
    food.push(f);
  }
}

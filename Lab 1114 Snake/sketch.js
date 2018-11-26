var w = 20;
var cols, rows;
var snake;

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position(windowWidth-width)/(2, 30);
  background(20, 20, 20);
  cols = width/w;
  rows = height/w;
  var loc = createVector(width/2, height/2);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
  cols = width/w;
  rows = height/w;
  var loc = createVector(random(width), random(height));
  var vel = createVector(0, 0);
  food = new Food(loc, vel);
  frameRate(15);
}

function draw(){
  background(20, 20, 20, 6000);
  snake.run();
  food.run();
}

if(snake.loc.x < food.loc.x + food.width &&
snake.loc.x + snake.width > food.loc.x &&
snake.loc.y < food.loc.y + food.height &&
snake.loc.y + snake.height > food.loc.y){

}

function keyPressed(){
  //up
  if(keyCode === 38){
    snake.vel = createVector(0, -20);
    snake.loc.add(snake.vel);
  }
  //down
  if(keyCode === 40){
    snake.vel = createVector(0, 20);
    snake.loc.add(snake.vel);
  }
  //right
  if(keyCode === 39){
    snake.vel = createVector(20, 0);
    snake.loc.add(snake.vel);
  }
  //left
  if(keyCode === 37){
    snake.vel = createVector(-20, 0);
    snake.loc.add(snake.vel);
  }
}

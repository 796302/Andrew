//  Global variables
var data;
function preload(){
  data = loadJSON("pokedexDataBase.json");
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(random(20,250), random(20,250), random(20,250)); // draws canvas

data.pokemon[1].name
console.log();
}

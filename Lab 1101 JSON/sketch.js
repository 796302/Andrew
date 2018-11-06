var data;
function setup(){
  loadJSON("population.json", gotData)
}
function gotData(jData){
  data = jData;
}
function draw() {
  if(data) {

  }
}

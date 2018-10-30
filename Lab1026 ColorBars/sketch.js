//global variable
bars = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(random(20,250), random(20,250), random(20,250)); // draws canvas

}

function bubblesort(bubs){
  for(var i = words.length - 1; i >=1; i--){
  for(var j = 0; j < words.length; j++){
    if(words[j] > words[j + 1]){
      var temp = words[j];
      words[j] = words[j + 1];
      words[j + 1] = temp;
      console.log(words);
    }
  }
}

}

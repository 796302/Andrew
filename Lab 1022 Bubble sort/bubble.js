<<<<<<< HEAD
=======

>>>>>>> c403632d5b43df4504f38cf3f350bc08679a2da5
words = ['fortnite', 'bortnite', 'chugjug', 'johnwick', 'sit', 'ez', 'poggers', 'fortniteburger'];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0); // draws canvas

for(var i = 0; i > words.length; i++){
  words.push(random(words[i]))
}

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

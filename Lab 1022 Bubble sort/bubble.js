nums = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0); // draws canvas


for(var i = 0; i < 10; i++){
  nums.push(Math.floor(random(0, 100)))
}
console.log(nums);

  for(var i = nums.length - 1; i >=1; i--){
    for(var j = 0; j < nums.length; j++){

      if(nums[j] > nums[j + 1]){
        var temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
          console.log(nums);
      }

    }

  }

}

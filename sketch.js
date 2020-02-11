let value= -190


function setup() {
  createCanvas(720, 400,WEBGL);
  background(0);
   
}

function draw() {
  
 drawMoon(value);

}


function drawMoon(phase){


   
  let locY= height/4;    
  pointLight(250,123,23,  height/2, locY, phase); 
  //console.log(locY);
  rotate(radians(frameCount));  

  fill(181, 168, 132);
  noStroke();
  sphere(110)
 
}

//Day2
function keyPressed() {

  console.log(key);
  if (key == 1){
    value = 1;
  }

  if (key == 2){
    value = 90;
  }
}

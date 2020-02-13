let value= -150




function setup() {
  createCanvas(720, 400,WEBGL);
  background(0);
   
}

function draw() {
  
 drawMoon(value);
 

  translate(width / 2, height / 4);
  translate(p5.Vector.fromAngle(millis() / 100, 40));
 fill(random(225),random(225), random(225));
 sphere(80);


}


function drawMoon(phase){


   
  let locY= height/4;    
  pointLight(250,123,23,  height/2, locY, phase); 
  //console.log(locY);
  rotate(radians(frameCount));  

  fill(255, 168, 132);
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
    value = 20;
  }

  if (key ==3){
    value =40;
  }

  if (key ==4){
    value =50;
  }

  if (key ==5){
    value =60; 
  }

  if (key==6){
    value =85;
  }

  if (key ==7){
    value =99;
  }

  if (key ==7){
    value =115;
  }

  if (key ==8){
    value= 155;
  }

  if (key ==9){
    value= 400;
  }

  if (key ==0){
    value= 720;
  }

  if (key ==12){
    value = 980;
  }
}

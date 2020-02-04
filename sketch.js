


function setup() {
  createCanvas(720, 400,WEBGL);
  background(0);
   
}

function draw() {
 
  translate(40,60);  
  drawMoon(20);
//drawMoon(frames%30, 20, 20);
//drawMoon(frames%15, 60, 70);

}


function drawMoon(phase, posx, posy,radius){

  fill(34,55,123);
  translate(posx,posy);
  sphere(radius)
 // ellipse(posx, posy, phase, phase);

 	
	
}


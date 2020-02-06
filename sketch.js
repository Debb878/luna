


function setup() {
  createCanvas(720, 400,WEBGL);
  background(0);
   
}

function draw() {
 
 	
 // translate(40,60);  
  drawMoon();
//drawMoon(frames%30, 20, 20);
//drawMoon(frames%15, 60, 70);

}


function drawMoon(phase, posx, posy,radius){

  	
   let locX = mouseX - width / 2;
  let locY = mouseY - height / 2; 	 
  pointLight(250, locX, locY, 80);	
  rotate(radians(frameCount));	

  fill(181, 168, 132);
  noStroke();
  sphere(110,posx,posy)
 
 // ellipse(posx, posy, phase, phase);

 	
	
}


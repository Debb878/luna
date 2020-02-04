/*
 *write a  drawTarget() function makes it easy to draw many distinct 
 *targets. Each call to drawTarget() should specify the position, size, and number of
 *rings for each target.
*/


function setup() {
  createCanvas(720, 400);
  background(51);
  noStroke();
  noLoop();
}

function draw() {
	
  //this code draws one target with 8 rings
  //let size = width / 10;
  //let steps = size/8;
  //let grayvalues = 255/8;
  
 //for (i = 0; i < 8; i++) {
    //fill(i*grayvalues);
    //ellipse(width/2, height/2, size - i*steps, size - i*steps);
  }


function drawTarget(xLoc, yLoc, size, numberOfRings){
	let size =10
	

	ellipse(xLoc,yLoc,size,numberOfRings);

}


let pings = [];
let howManyCosas = 400;

function setup(){
  createCanvas(710, 400);

 
  for (let i = 0; i < howManyCosas; i++){
       pings[i] = new Cosa();
  }
}

function draw(){

  background(0);

  for (let i = 0; i < howManyCosas; i++){
       pings[i].move();
       pings[i].display();
  }
}

class Cosa{
  
    constructor(){
      this.x = random(width);
      this.y = random(height/2);
      this.xspeed = random(0,1);
      this.yspeed = random(0,1);
   }

    display(){
   
      stroke(0)
      strokeWeight(2);
      fill(random(255), random(255), random(255));
      ellipse(this.x, this.y, random(10), random(48));

    pop();   
      let howManyCosas = 1000;
      noStroke();
      fill(255); 
      square(random(this.x), random(this.y), random(2));
    push();
   }

    move(){

       this.x = this.x + this.xspeed;
       this.y = this.y + this.yspeed;

       if ((this.x > width) || (this.x < 0)) {
       this.xspeed = this.xspeed * -10;
      }

      if ((this.y > height) || (this.y < 0)) {
       this.yspeed = this.yspeed * -1;
      }

    }
}




function Drop(){
  
  this.x = random(width);
  this.y = random(-1000,-50);
  this.z = random(0,20);
  this.gravity = map(this.z,0,20,0.01,0.2);
  this.length = map(this.z,0,20,10,30);
  this.speed = map(this.z, 0, 20, 3,10);
  this.dropColor = color(random(255),random(255),random(255));

  this.fall = function(){

    this.y += this.speed;
    this.speed += this.gravity;

    if (this.y > height){
      console.log("now");
      dropSound.playMode('sustain');
      dropSound.play();
      this.y = random(-100,-200);
      this.speed = map(this.z, 0, 20, 3,10);
    }
  }

  this.show = function(){
    if(mouseIsPressed){
      stroke(this.dropColor);
    }else{
      stroke(136, 43, 226);
    }
      
    strokeWeight(map(this.z, 0, 20, 1, 3));
    line(this.x, this.y, this.x, this.y + this.length);
  }
}
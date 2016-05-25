var newDrops;

function setup(){
  createCanvas(windowWidth, windowHeight);
  newDrops = [];
  for (var i = 0; i < 250; i++) {
    newDrops.push(new Drop());
  };
}

function draw(){
  background(230,230,250);
  newDrops.forEach(function(drop){
    drop.fall();
    drop.show();
  })
}

function Drop(){
  
  this.x = random(width);
  this.y = random(-1000,-50);
  this.z = random(0,20);
  this.gravity = map(this.z,0,20,0.01,0.2);
  this.length = map(this.z,0,20,10,30);
  this.speed = map(this.z, 0, 20, 3,10);

  this.fall = function(){

    this.y += this.speed;
    this.speed += this.gravity;
    if (this.y > height){
      this.y = random(-100,-200);
      this.speed = map(this.z, 0, 20, 3,10);
    }
  }

  this.show = function(){
    console.log(this.y);
    stroke(136, 43, 226);
    strokeWeight(map(this.z, 0, 20, 1, 3));
    line(this.x, this.y, this.x, this.y + this.length);
  }
}



// var d;
// // The setup function runs once

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   d = new Drop();
// }

// //The draw function runs many times per second. The default rate is 60 frames per second!
// function draw() {
//   background(230,230,250);
//   d.fall();
//   d.show();
// }

// function Drop(){
//   this.x = width/2;
//   this.y = 0;
//   this.len = 10;
//   this.yspeed = 1;

//   this.show = function(){
//     stroke(136, 43, 226);
//     strokeWeight();
//     line(this.x, this.y, this.x, this.y + this.len);
//   }

//   this.fall = function(){
//     this.y = y + yspeed
//   }
// }

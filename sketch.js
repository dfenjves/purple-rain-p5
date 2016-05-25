var newDrops;
var dropSound;

function preload(){
  dropSound = loadSound('raindrops.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  newDrops = [];
  for (var i = 0; i < 200; i++) {
    newDrops.push(new Drop());
  };
  dropSound.play()
}

function draw(){
  background(230,230,250);
  newDrops.forEach(function(drop){
    drop.fall();
    drop.show();
  })
}


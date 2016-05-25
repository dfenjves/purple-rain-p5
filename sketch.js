var newDrops;
var dropSound;

function preload(){
  dropSound = loadSound('dropSound.mp3');
  dropSound.setVolume(0.1);
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  newDrops = [];
  for (var i = 0; i < 5; i++) {
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


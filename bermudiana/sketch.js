let img;

function preload (){
img = loadImage ('bermudianalizard.gif');
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  
strokeWeight (0);
noStroke;
 

}

function draw() {
  
  var num = 1
var sideLen = windowWidth/num
  
  translate(10, 10);
  for (var y = 0; y < windowWidth; y = y+sideLen)
  for (var x = 0; x < windowWidth; x = x+sideLen) {
    
    
  quad (x, y,
    x+sideLen, y,
    x +sideLen, y+sideLen,
    x, y+sideLen);
    
   image (img, 300,200
         );
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  
}
}

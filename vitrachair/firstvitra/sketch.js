let pics;

function preload (){
chair1= loadImage ('/chair/chair1.png');
chair2 = loadImage ('/chair/chair2.png');
  chair3 = loadImage ('/chair/chair3.png');
 
  
  
 
}
  

function setup() {
  createCanvas(windowWidth, windowWidth);
   frameRate (0.5);
  noFill();
  noStroke();
 

}

function draw() {
  
  var num = 5
  var sideLen = windowWidth/num;
  
  translate(60, 60);
  for (var y = 0; y < windowWidth; y = y+sideLen)
  for (var x = 0; x < windowWidth; x = x+sideLen) {
    
    
  quad (x, y,
    x+sideLen, y,
    x +sideLen, y+sideLen,
    x, y+sideLen);
    
         var pics =  [chair1, chair2, chair3,];
       
      image (pics [int (random (0,3))], x, y );
    
    
       
    
    
    
  }
  
noLoop ()
  
  
  
}
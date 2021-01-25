function preload (){
  House = loadImage ('images/HOUSEDRAW.jpg');
  boat = loadImage ('images/boat.jpg');
  car = loadImage ('images/cardraw.jpg');
 colorhouse = loadImage ('images/colorhouse.jpg');
 gombey = loadImage ('images/gombeydraw.jpg');
  head = loadImage ('images/headdraw.jpg');
  onepalm = loadImage ('images/onepalmdraw.jpg');
  palm = loadImage ('images/palmdraw.jpg');
  plant = loadImage ('images/plantdraw.jpg');
  singlehouse = loadImage ('images/singlehouse.jpg');
}
  

function setup() {
  createCanvas(windowWidth, windowWidth);
   frameRate (0.5);
  noStroke();
 

}

function draw() {
  
  var num = 4
  var sideLen = windowWidth/num
  
  translate(60, 60);
  for (var y = 0; y < windowWidth; y = y+sideLen)
  for (var x = 0; x < windowWidth; x = x+sideLen) {
    
    
  quad (x, y,
    x+sideLen, y,
    x +sideLen, y+sideLen,
    x, y+sideLen);
    var pics = [House,boat,car,colorhouse,gombey,head,onepalm,palm,plant,singlehouse];
    image (pics [int (random (0,9))], x, y );
       
    
    
    
  }

  
  
  noLoop
}
let pics;

function preload (){
bermudiana= loadImage ('images/bermudiana.png');
hat = loadImage ('images/hat.png');
lizard= loadImage ('images/lizard.png');




}


function setup() {
  createCanvas(windowWidth, windowHeight);
   frameRate (0.5);
  background ('white');
  noStroke();


}

function draw() {
  ;

  var num = 5
  var sideLen = windowWidth/num;

    translate (-150, -150); // gives design a bleed effect

    for ( var y = 0; y < 2 * windowWidth; y = y + sideLen) {

        for ( var x = 0; x < 2 * windowWidth; x = x + sideLen) {//row across x





         var pics =  [bermudiana, hat, lizard,];

      image (pics [int (random (0,3))], x, y );
    }

      function windowResized() {
        resizeCanvas(windowWidth, windowHeight);



  }

//noLoop ();



}
}

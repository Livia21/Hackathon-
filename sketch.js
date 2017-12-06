var icon;
var volume;
var mycuteball;
var mycolorList = [
	'#f39149',
	'#d7482d',
	'#4d9b41',
	'#6761a3',
	'#f5eb61',
]

function preload(){
	icon = loadImage('assets/tree.png');
}

function setup() {

	// Create the canvas
	createCanvas(windowWidth, windowHeight);
	mycuteball = new ball(0,0,size,1)
	
	// Deal with microphone
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {

	//get the volume
	var volume = mic.getLevel();
	console.log(volume);
	push();
	background('#c4e6ff');
	translate(width / 2, height / 2);
	imageMode(CENTER);
	image(icon,0,100,600,640);
	mycuteball.display
	
	
//SNOWFLAKES
  if(true){
    var amount= map(volume,0,1,0,5);
    for(i=1; i <= amount; i++) {
      var obj = {
        x: random(0,1),
        y: random(0,-height/10),
        size: random(1, amount+2)
      }
      //add snowflake to the array of snowflakes
      snowflakes.push(obj);
    }
  }
  
  
  for(var i=0; i< snowflakes.length; i++) {
    var fallingSpeed = 1;
    
    // Increase the single snowflake vertical position
    snowflakes[i].y += fallingSpeed + snowflakes[i].y*0.006; // the last piece needs to simulate gravity
    
    // Create a new ellipse using the x and y properties of the snowflake object
    fill(235,235,188)
    noStroke();
    fill(255);
    ellipse(snowflakes[i].x*width, snowflakes[i].y, snowflakes[i].size);
  }
  
   
  
  for (var i=snowflakes.length-1; i>= 0; i--){
    if (snowflakes[i].y > height){
      snowflakes.splice(i,1);
    }
  }

}
function ball(x,y,size,color,g){
	this.x=x;
	this.y=y;
	this.size=size;
this.display = function(){
	var minSize = width / 20;
	var maxSize = width;
	var size = map(volume, 0, 1, minSize, maxSize);
 	ellipse(this.x,this.y.this.size);
    fill(mycolorList[g]);
}
}


//if the window is resized, update the sketchs
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
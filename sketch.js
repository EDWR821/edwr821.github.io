function setup(){
        createCanvas(640,480);
}

function draw(){
    if (mouseIsPressed) {
        fill(0);
    } else{
        
        fill(250)
    }
    ellipse(mouseX,mouseY,10,10);
 }
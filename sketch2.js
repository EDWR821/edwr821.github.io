function setup(){
    createCanvas(1000,1000,WEBGL);
}

function draw(){
    background(200);
    
    
    if (mouseIsPressed) {
        rotateX(frameCount*0.03);
        rotateY(frameCount*0.03);
    }
    fill(65, 250, 219)
    sphere(300);
}
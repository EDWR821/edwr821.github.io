let x=0
function setup(){
    createCanvas(500,500,WEBGL);
    noLoop();
}

function draw(){
    background(204);
    x=x+10.0;
    
    if(x>width){
        x=0;
    }
    line(x,0,100,height);
    line(0,x,0,height);
    line(0,0,x,height);
}
function mousePressed(){
    loop();
}
function mouseReleased(){
    noLoop();
}